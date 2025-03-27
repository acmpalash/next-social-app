'use client'
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import React from 'react';



export default function FollowButton({ user: userFormProfilePage }) {
    const router = useRouter();
    const {user} = useUser();
    const handelFollow = async () => {
        try {
            const res = await fetch('/api/user/follow', {
                method: 'POST',
                body: JSON.stringify({
                    userProfileId: userFormProfilePage._id,
                    userWhofollowsId: user.publicMetadata.userMongoId, 
                }),
            });

            if(res.status === 200){
                router.refresh();
            }
        } catch (error) {
            console.error('Failed to Follow user', error);
            
        }
    }
  return (
    <button 
        onClick={handelFollow}
        className='bg-blue-500 text-white px-4 py-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed'
        disabled={
            !user || user.publicMetadata.userMongoId === userFormProfilePage._id
        } >
            {user &&
                userFormProfilePage.Followers.includes(user.publicMetadata.userMongoId)
                ? 'Unfollow'
                : 'Follow'
                }
        </button>
  );
}
