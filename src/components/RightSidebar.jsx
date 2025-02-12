'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation'; 
import News from './News';

export default function RightSidebar() {
  const [input, setInput] = useState();
  const router = useRouter();
  const handelSubmit = (e) =>{
    e.preventDefault();
    if(!input.trim()) return;
    router.push(`/search/${input}`);
  };
  return (
    <>
    <div className='sticky top-0 bg-white py-2'>
    <form onSubmit={handelSubmit}>
    <input type="text" placeholder='search' value = {input} onChange={(e)=> setInput(e.target.value)} className='bg-gray-100 border border-gray-200 rounded-3xl text-sm w-full px-4 py-2' />
    </form>
    </div>
    <News/>
    </>
  );
};
