'use client'

import { userButton, useUser } from '@clerk/nextjs';
import { TfiLayoutMenuSeparated } from "react-icons/tfi";

export default function MiniProfile() {
    const { user } = useUser();
  return (
    <div className='text-gray-700 text-sm flex items-center cursor-pointer p-3 hover:bg-gray-100 rounded-full transition-all duration-200 justify-between xl:w-56 w-fit gap-2'>
    <userButton />
    <div className='hidden xl:inline flex-1 w-8'>
    <h4 className='font-bold text-sm trancate'>{user && user.fullname}</h4>
    <p className='text-gray-500 text-sm trancate'>
    @{user && user.username} </p>
    </div>
    <TfiLayoutMenuSeparated className='h-3 w-3 hidden xl:inline' />
    </div>
  )
}
