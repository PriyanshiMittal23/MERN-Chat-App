import React, { useState } from 'react'
import { BsEmojiWink } from "react-icons/bs";
import { LuSend } from "react-icons/lu";
import useSendMessage from '../hooks/useSendMessage';

const MesaageInput = () => {
  const [message, setMessage] = useState();
  const {sendMessage, loading} = useSendMessage();

  const handleSubmit = async(e)=>{
    e.preventDefault();
    if(!message){
      return;
    }
    await sendMessage(message);
    setMessage("");
  }

  return (
    <div>
      <form className='px-4 my-3' onSubmit={handleSubmit}>
        <div className='w-full relative'>
          {/* <button className='absolute inset-y-0 start-0 flex items-center ps-3'><BsEmojiWink/></button> */}
          <input type="text" placeholder='Message' className='w-full border rounded-full text-sm block p-2.5 focus:outline-none focus:border-none bg-gray-700 border-gray-600 text-white' value={message} onChange={(e)=>setMessage(e.target.value)}/>
          <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>{loading?<span className='loading loading-spinner'></span>:<LuSend/>}</button>
        </div>
      </form>
    </div>
  )
}

export default MesaageInput