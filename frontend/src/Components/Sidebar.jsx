import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogOutBtn from './LogOutBtn'

const Sidebar = () => {
  return (
    <div className='flex flex-col p-4 border-r border-slate-300'>
        <SearchInput/>
        <div className='divider px-3'></div>
        <Conversations/>
        <LogOutBtn/>
    </div>
  )
}

export default Sidebar