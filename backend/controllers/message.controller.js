import Conversation from '../models/Conversation.js';
import Message from '../models/Message.js';

export const sendMessage = async(req,res)=>{
    try {
        const {message} = req.body;
        const {id: recieverId} = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants:{ $all:[senderId,recieverId]}
        })
        if(!conversation){
            conversation = await Conversation.create({
                participants:[senderId,recieverId]
            })
        }

        const newMessage = await Message({senderId,recieverId,message});
        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        // await conversation.save();
        // await newMessage.save();
        // this will run in parallel, so it will take less time
        await Promise.all([conversation.save(),newMessage.save()]);

        res.status(201).json({newMessage});
    } 
    catch (err) {
        console.log("Error in sendMessage Controller",err.message);
        res.status(500).json({error:"Internal server error"});
    }
}

export const getMessages = async(req,res)=>{
    try {

        const {id:userToChat} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants:{$all: [senderId, userToChat]}
        }).populate("messages");

        if(!conversation){
            res.status(200).json([]);
        }

        res.status(200).json(conversation.messages);

    } catch (err) {
        console.log("Error in getMessages Controller",err.message);
        res.status(500).json({error:"Internal server error"});
    }
}
