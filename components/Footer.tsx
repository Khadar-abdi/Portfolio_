 
import React from 'react'
import Social from "@/components/social"
 

const Footer = () => {
    return (
        <div className='flex flex-col py-10 flex-wrap '>
            <div className='flex md:flex-row  lg:flex-row  flex-col gap-4 justify-between items-center border-slate-300 border-b pb-5 flex-wrap'>

                <div className=' flex flex-col   justify-center font-extrabold  text-center text-slate-400'>
                    <div className='flex flex-row  '>
                        <span className='font-extrabold text-xl '>{'{'} </span>
                        <div className='flex flex-col text-center   justify-center mx-2  '>
                            <span className='font-extrabold font-sans text-sm'><a href="#">Khadaer_</a></span>
                        </div>
                        <span className='font-extrabold text-xl '>{'}'} </span>

                    </div>
                    
                </div>

                <div className='flex flex-row flex-wrap justify-center items-center gap-10 font-sans'>
                    <span className='text-[#42446E] dark:text-[#acaeda] text-sm'>252-63-3926597</span>
                    <span className='text-[#42446E] dark:text-[#acaeda] text-sm'>khaderab101@gmail.com</span>
                    <div className='flex flex-row gap-4 justify-center items-center flex-wrap text-[#42446E] dark:text-[#acaeda]'>
                        <Social/>
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-center items-center  text-center gap-4 pt-5 flex-wrap'>
                <span className='text-sm text-[#42446E] dark:text-[#acaeda] font-sans' > &#169; 2024 Khader   </span>
                <span className='flex flex-row text-sm text-center dark:text-[#acaeda] text-[#42446E] gap-3 font-sans flex-wrap '>Developed by   <p className='text-center bg-gradient-to-l from-cyan-500 to-pink-600 bg-clip-text text-transparent  '>  Khader </p>  </span> 
                <span className='flex flex-row text-sm text-center dark:text-[#acaeda] text-[#42446E] gap-3 font-sans flex-wrap'> — Fueled by Creativity & Determination 🚀 .</span>

            </div>
        </div>
    )
}

export default Footer