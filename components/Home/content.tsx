import React from 'react'
import khader from '@/images/khader.jpg'
import Image from 'next/image'
import { BackgroundLines } from '../backgroundLines'
 

 

const Content = () => {
  return (
    // <BackgroundLines>
    <div className='flex lg:flex-row md:flex-row  justify-center md:justify-between lg:justify-between   flex-col gap-20 items-center py-24 pr-10  flex-wrap  '>

      <div className='flex flex-wrap justify-center text-center '>
        <span className=' font-pop text-4xl md:text-2xl text-center md:text-start  lg:text-start font-bold text-[#42446E] leading-snug dark:text-[#d1d2e9] '> Hi 👋, <br/>
          My name is <br/>
          <p className=' bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text md:text-start lg:text-start text-transparent text-center'>Khader ab </p> 
          I build things for web</span>
      </div>
      <div className='    w-64 h-64 md:w-48 md:h-48  rounded-full overflow-hidden bg-gradient-to-t from-cyan-500 to-pink-500 bg-clip-border border-transparent border-8'>
        <Image src={khader} alt='Khader Image'  className='  object-top object-cover h-full w-full rounded-full  ' />
      </div>

    </div>
    // </BackgroundLines>
  )
}

export default Content