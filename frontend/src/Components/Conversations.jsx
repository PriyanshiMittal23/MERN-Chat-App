import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../hooks/useGetConversations'

const Conversations = () => {
  const {loading, conversations} = useGetConversations();
  console.log("ConversationS:",conversations);

  return (
    <div className='flex flex-col py-2 overflow-auto'>
      {conversations.map((conversation, idx)=>(
        <Conversation key={conversation._id} 
        conversation={conversation}
        lastidx= {idx===conversations.length-1}
        />
      ))}
      {loading?<span className='loading loading-spinner'></span>:null}
    </div>
  )
}

export default Conversations