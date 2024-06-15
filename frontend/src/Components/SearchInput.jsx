import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import useGetConversations from '../hooks/useGetConversations';
import toast from 'react-hot-toast';

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const {conversations, setConversations} = useGetConversations();
  const handleSubmit = (e)=>{
    e.preventDefault();
    // if(!search){
    //   return;
    // }
    // const filteredConversations = conversations.filter((c) =>
    //   c.fullName.toLowerCase().includes(search.toLowerCase()) ||
    //   c.username.toLowerCase().includes(search.toLowerCase())
    // );
    // console.log(filteredConversations);
    // if (filteredConversations.length > 0) {
    //   setConversations(filteredConversations);
    //   // setSearch("");
    // } else {
    //   toast.error("No such conversation found");
    // }
  };

  return (
    <div>
        <form className='flex items-center gap-2' onSubmit={handleSubmit}>
            <input type="text" placeholder='Search...' className='input input-bordered rounded-full' value={search} onChange={(e)=>setSearch(e.target.value)}/>
            <button className='btn btn-circle bg-cyan-400 text-white' type='submit'><IoSearchSharp className='w-6 h-6 outline-none'/></button>
        </form>
    </div>
  )
}

export default SearchInput