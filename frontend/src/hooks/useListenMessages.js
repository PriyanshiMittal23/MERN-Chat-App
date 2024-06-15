import React, { useEffect } from 'react'
import { useSocketContext } from '../Context/SocketContext'
import useConversation from '../zustand/useConversation';
import notify from '../assets/sound/notifcation.mp3';

const useListenMessages = () => {
  const {socket} = useSocketContext();
  const {messages, setMessages,selectedConversation} = useConversation();

  useEffect(()=>{
    socket?.on("newMessage",(newMessage)=>{
        const sound = new Audio(notify);
        sound.play();
        console.log(newMessage);
        if(selectedConversation._id === newMessage.senderId){
          setMessages([...messages,newMessage])
        }
        
    })

    return ()=>socket?.off("newMessage");
  },[socket,messages,setMessages]);
}

export default useListenMessages