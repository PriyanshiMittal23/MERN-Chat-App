import React from 'react';
import useConversation from '../zustand/useConversation'
import { useSocketContext } from '../Context/SocketContext';

const Conversation = ({conversation, lastidx}) => {
    const profilePicUrl = conversation.profilePic.startsWith('http') ? conversation.profilePic : `http://localhost:5000${conversation.profilePic}`;
    const {selectedConversation, setSelectedConversation} = useConversation();
    const isSelected = selectedConversation?._id===conversation._id;
    const {onlineUsers} = useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id)

  return (
    <>
    <div className={`flex gap-2 items-center hover:bg-cyan-300 rounded p-2 py-1 cursor-pointer ${isSelected?"bg-cyan-300":""}`} onClick={()=>{setSelectedConversation(conversation)}}>
        <div className={`avatar ${isOnline?"online":""}`}>
            <div className='w-12 rounded-full'>
                <img src={profilePicUrl} alt="user pfp" />
            </div>
        </div>
        <div className='flex flex-col flex-1'>
            <div className='flex gap-3 justify-between'>
                <p className='font-bold text-gray-400'>{conversation.fullName}</p>
                {/* <span className='text-xl'>🥰</span> */}
            </div>
        </div>
    </div>
    {!lastidx && <div className='divider py-0 my-0 h-1' />}
    </>
  )
}

export default Conversation