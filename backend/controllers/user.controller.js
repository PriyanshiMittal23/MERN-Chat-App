import User from "../models/User.js";

export const getUsersForSidebar = async(req,res)=>{
    try {

        const loggedInUser = req.user._id;
        const allUsers = await User.find({_id:{$ne:loggedInUser}}).select("-password");

        res.status(200).json(allUsers)
        
    } catch (err) {
        console.log("Error in getUsersForSidebar Controller",err.message);
        res.status(500).json({error:"Internal server error"});
    }
}