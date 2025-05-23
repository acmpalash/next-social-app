'use client'
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { HiHeart, HiOutlineChat, HiOutlineHeart, HiOutlineTrash } from 'react-icons/hi';
import { modalAtom } from '@/atom/modalAtom';
import { useRecoilState } from 'recoil';

export default function Icons({post}) {
  const [isLiked, setIsLiked ] = useState(false);
  const [likes, setLikes] = useState(post.likes || []);
  const [open, setOpen] = useRecoilState(modalAtom);
  const [postId, setPostId] = useRecoilState(postIdAtom);
  const {user} = useUser();
  const router = useRouter();

  const likePost = () => {
    if(!user) {
      return router.push('/sign-in');
    }
    const like = fetch('/api/post/like', {
      method: 'PUT',
      headers: {'Content-Type': 'application/json',
        },
        body : JSON.stringify({postId: post._id}),
    });
    if(like && isLiked){
      setLikes(likes.filter((like) => like !== user.publicMetadata.userMongoId ));
    }
    if(like && !isLiked){
      setLikes([...likes, user.publicMetadata.userMongoId]);
    }
  };
    useEffect(() =>{
      if(user && likes?.includes(user.publicMetadata.userMongoId)){
        setIsLiked(true);
      } else {
        setIsLiked(false);
      }
    }, [likes, user]);

    const deletePost = async () => {
      if(window.confirm('Are you confirm to delete the Post?')) {
        if(user && user.publicMetadata.userMongoId === post.user) {
          const res = await fetch('/api/post/delete', {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({postId : post._id}),
          });
          if(res.status === 200) {
            location.reload();
          } else {
            alert('Error deleting post');
          }
        }
      }
    };
  
  return (
    <div className='flex justify-start gap-5 p-2 text-gray-500'>
      <div className='flex items-center'>
        <HiOutlineChat className='h-8 w-8 cursor-pointer rounded-full transition duration-500 case-in-out p-2 
        hover:text-sky-500 hover:bg-sky-100' onClick={()=> {
                if(!user){
                  router.push('/sign-in');
                } else {
                  setOpen(!open);
                  setPostId(post._id);
                }
            }         
          }
        />
        {post.comments.length > 0 && (
          <span className='text-xs'>{post.comments.length}</span>
        )}
        </div>
        <div className='flex items-center'>
            {isLiked ? (
              <HiHeart onClick = {likePost} className = 'h-8 w-8 cursor-pointer rounded-full transition duration-500 case-in-out p-2 text-red-600 hover:text-red-500 hover:bg-red-100' />
            ) : (
            <HiOutlineHeart onClick = {likePost} className='h-8 w-8 cursor-pointer rounded-full transition duration-500 case-in-out p-2 hover:text-red-500 hover:bg-red-100' />
          )}
          {likes.length > 0 && <span 
                className={`text-xs ${isLiked && 'text-red-600'}`}>
                  {likes.length}
                  </span>}
        </div>
        {user && user.publicMetadata.userMongoId === post.user && (
        <HiOutlineTrash onClick = {deletePost} className='h-8 w-8 cursor-pointer rounded-full transition duration-500 case-in-out p-2 hover:text-green-500 hover:bg-green-100' />
      )};
    </div>
  );
}
