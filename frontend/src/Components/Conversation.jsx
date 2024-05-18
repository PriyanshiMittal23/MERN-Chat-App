import React from 'react'

const Conversation = () => {
  return (
    <>
    <div className='flex gap-2 items-center hover:bg-cyan-300 rounded p-2 py-1 cursor-pointer'>
        <div className='avatar online'>
            <div className='w-12 rounded-full'>
                <img src="data:image/jpeg;base64,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" alt="user pfp" />
            </div>
        </div>
        <div className='flex flex-col flex-1'>
            <div className='flex gap-3 justify-between'>
                <p className='font-bold text-gray-400'>johndoe</p>
                <span className='text-xl'>🥰</span>
            </div>
        </div>
    </div>
    <div className='divider py-0 my-0 h-1' />
    </>
  )
}

export default Conversation