import React from 'react'

export default function Loader() {
  return (
    <div className='flex justify-center items-center h-screm'>
        <div className='animate-spin rounded-full border-t-4 border-red-600 border-solid h-10 w-10'></div>
    </div>
  )
}
