import React from 'react'
import { BsCalendarEvent } from 'react-icons/bs'
 
import { IoLocationOutline } from 'react-icons/io5'
import { MdOutlineBusinessCenter } from 'react-icons/md'

const Education = () => {
    return (
        <div className='flex flex-col pt-5'>
            <h2 className='text-[#42446E] dark:text-[#a3a6e2] font-bold text-2xl font-pop'>Education</h2>

            <div className='flex lg:flex-row  md:flex-row  flex-col  lg:justify-between  md:justify-between  items-start pt-10   border-slate-100 border-b-[1px] pb-3  dark:border-slate-600 '>
                <div className='flex  lg:flex-col md:flex-col flex-row  gap-7'>
                    <span className='text-base text-[#666666] dark:text-[#b3b2b2] font-pop'>BSc Computer Science</span>
                    <div className='flex lg:flex-row md:flex-row flex-col  gap-2 lg:gap-7 md:gap-6 pt-1'>
                        <span className='text-xs text-[#A7A7A7]  font-pop flex flex-row gap-2'><MdOutlineBusinessCenter /> UOH</span>
                        <span className='flex flex-row gap-3 text-xs text-[#A7A7A7] font-pop'> <IoLocationOutline /> Hargeisa</span>
                    </div>
                </div>
                <div className='flex md:flex-col lg:flex-col  flex-row-reverse md:gap-3 lg:gap-3 gap-10 justify-between items-end  '>
                    <span className='p-x4 py-2 bg-green-200 dark:bg-[#336433] text-xs   font-pop rounded-full text-center w-2/3 items-end'> Full-Time</span>
                    <span className='flex flex-row gap-3 text-xs text-[#A7A7A7] font-pop'> <BsCalendarEvent /> Nov- 2018 - Aug-2022 </span>
                </div>

            </div>
            
             
        </div>
    )
}

export default Education