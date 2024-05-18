import React from 'react'
import { BsEmojiWink } from "react-icons/bs";
import { LuSend } from "react-icons/lu";

const MesaageInput = () => {
  return (
    <div>
      <form className='px-4 my-3'>
        <div className='w-full relative'>
          {/* <button className='absolute inset-y-0 start-0 flex items-center ps-3'><BsEmojiWink/></button> */}
          <input type="text" placeholder='Message' className='w-full border rounded-full text-sm block p-2.5 focus:outline-none focus:border-none bg-gray-700 border-gray-600 text-white'/>
          <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'><LuSend/></button>
        </div>
      </form>
    </div>
  )
}

export default MesaageInput