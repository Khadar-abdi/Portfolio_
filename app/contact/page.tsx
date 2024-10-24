import React from 'react'
import Social from '@/components/social'
export const dynamic = 'force-dynamic';

const page = () => {
  return (
    <div className=' flex flex-col justify-center items-center max-h-[380px] h-screen  gap-4'>
      <span className='font-DM text-[#1E0E62] dark:text-[#a392ec] text-2xl font-extrabold flex-wrap  text-center'>For any questions please mail us:</span>
      <span className='font-DM  bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent text-center flex-wrap text-2xl font-extrabold'>abdik1880@gmail.com</span>
      <div className='flex flex-row gap-5'>
        <Social />
      </div>

    </div>
  )
}

export default page