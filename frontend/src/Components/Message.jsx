import React from 'react'
import { useAuthContext } from '../Context/AuthContext'
import useConversation from '../zustand/useConversation';
import { extractTime } from '../utils/extractTime';

const Message = ({message}) => {
  const {authUser} = useAuthContext();
  const {selectedConversation} = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClass = fromMe?'chat-end':'chat-start';
  const bubbleBg = fromMe?'bg-cyan-300':'';
  const profile = fromMe? authUser.profilePic: selectedConversation.profilePic;
  const pfp = profile.startsWith('http') ? profile : `http://localhost:5000${profile}`;
  const time = extractTime(message.createdAt);

  return (
    <div className={`chat ${chatClass}`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img alt="Tailwind CSS chat bubble component" src={pfp} />
            </div>
        </div>
        <div className={`chat-bubble ${bubbleBg} pb-2 text-white`}>{message.message}</div>
        <div className='chat-footer opacity-70 text-xs gap-1 flex items-center'>{time}</div>
    </div>
  )
}

export default Message