import React, { useEffect } from 'react'
import Messages from './Messages'
import MesaageInput from './MesaageInput'
import { TbMessages } from "react-icons/tb";
import useConversation from '../zustand/useConversation';

const MessageContainer = () => {
  const {selectedConversation, setSelectedConversation} = useConversation();
  useEffect(()=>{
    // cleanup function
    return ()=>{
      setSelectedConversation(null);
    }
  },[setSelectedConversation])

  return (
    <div className='flex flex-col md:min-w-[450px]'>
      {!selectedConversation ?(
        <NoPageSelected/>
      ):
      (
        <>
        <div className='bg-slate-500 px-4 py-2 mb-2'>
            {/* <span className='label-text'>To: </span> */}
            <span className='text-white font-bold'>{selectedConversation.fullName}</span>
        </div>
        <Messages/>
        <MesaageInput/>
        </>
      )
      }
    
    </div>
  )
}

const NoPageSelected = ()=>{
  return(
    <div className='flex items-center justify-center w-full h-full bg-slate-300'>
      <div className='px-4 text-gray-500 text-center font-semibold flex flex-col items-center gap-2 sm:text-lg md:text-xl'>
        <p>Welcome  👋</p>
        <p>Select a Chat to Start Messaging</p>
        <TbMessages className='text-3xl md:text-6xl text-center'/>
      </div>
    </div>
  )
}

export default MessageContainer