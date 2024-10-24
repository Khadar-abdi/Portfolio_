'use client'
import { ModeToggle } from '@/components/toggle'
import Link from 'next/link'
import React, { useState } from 'react'
import { BsToggleOff, BsToggleOn } from 'react-icons/bs'
import Social from './social'


const Header = () => {

    const [toggle, setToggle] = useState(false);

    const TOggle = () => {


        setToggle(!toggle)

    }
    const closeMenu = () => {
        setToggle(false)
    }
    return (
        <div className='flex flex-row justify-between items-center my-5 space-x-2 border-slate-5 border-b pb-5 '>

            <div className=' flex flex-col justify-center font-extrabold  text-center bg-gradient-to-l from-pink-500 to-cyan-500 bg-clip-text text-transparent'>
                <div className='flex flex-row  pl-8 md:pl-3 '>

                    <div className='flex flex-col text-center    justify-center mx-2  '>
                        <span className='font-extrabold font-sans'><Link href="/">Khadaer_</Link></span>
                    </div>


                </div>

            </div>
            <div className='flex flex-row justify-between'>
                <div className={` flex-row gap-5  justify-self-center items-center font-DM  hidden md:flex space-x-2 `} >
                    <Link className='text-slate-500 text-sm font-semibold   dark:text-slate-300 hover:text-slate-700 dark:hover:text-slate-100 duration-500 ' href={'/'}>Home</Link>
                    <Link className='text-slate-500 text-sm font-semibold dark:text-slate-300 hover:text-slate-700 dark:hover:text-slate-100 duration-500 ' href={'/about'}>About</Link>
                    <Link className='text-slate-500 text-sm font-semibold dark:text-slate-300 hover:text-slate-700 dark:hover:text-slate-100 duration-500 ' href={'/blog'}>Blog</Link>
                    <Link className='text-slate-500 text-sm font-semibold dark:text-slate-300 hover:text-slate-700 dark:hover:text-slate-100 duration-500 ' href={'/projects'}>Projects</Link>
                    <Link className='text-slate-500 text-sm font-semibold dark:text-slate-300  hover:text-slate-700 dark:hover:text-slate-100 duration-500 ' href={'/contact'}>Contact</Link>
                    <div className=' flex flex-row gap-4 justify-center items-center   md:hidden   lg:flex'>
                        <Social />
                    </div>
                </div>
                <div className=' md:block lg:block hidden pl-4 '>

                    <ModeToggle />
                </div>


            </div>
            <div onClick={TOggle} className='lg:hidden md:hidden  sm:block pr-5'>
                {toggle ? <BsToggleOff width={40} /> : <BsToggleOn width={40} />}
            </div>
            <div className={
                toggle
                    ? 'fixed md:hidden right-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-slate-950 ease-in-out duration-500'
                    : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
            }>
                <div onClick={TOggle} className='lg:hidden md:hidden sm:block    absolute right-0 p-[1.21rem] pt-[1.5rem] text-slate-200 '>
                    {toggle ? <BsToggleOff onClick={closeMenu} width={40} /> : <BsToggleOn onClick={closeMenu} width={40} />}
                </div>
                <div className={` flex flex-col gap-5    p-10 font-DM     space-y-2 `} >
                    <Link onClick={closeMenu} className='text-slate-500 text-base font-semibold   dark:text-slate-300 hover:text-slate-700 dark:hover:text-slate-100 duration-500 ' href={'/'}>Home</Link>
                    <Link onClick={closeMenu} className='text-slate-500 text-base font-semibold dark:text-slate-300 hover:text-slate-700 dark:hover:text-slate-100 duration-500 ' href={'/about'}>About</Link>
                    <Link onClick={closeMenu} className='text-slate-500 text-base font-semibold dark:text-slate-300 hover:text-slate-700 dark:hover:text-slate-100 duration-500 ' href={'/blog'}>Blog</Link>
                    <Link onClick={closeMenu} className='text-slate-500 text-base font-semibold dark:text-slate-300 hover:text-slate-700 dark:hover:text-slate-100 duration-500 ' href={'/projects'}>Projects</Link>
                    <Link onClick={closeMenu} className='text-slate-500 text-base font-semibold dark:text-slate-300  hover:text-slate-700 dark:hover:text-slate-100 duration-500 ' href={'/contact'}>Contact</Link>

                </div>
                <div className='   pl-10 '>

                    <ModeToggle />
                </div>
            </div>
        </div>
    )
}

export default Header