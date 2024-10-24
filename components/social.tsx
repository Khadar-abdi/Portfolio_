
import Link from 'next/link'
import React from 'react'
import { LiaLinkedinIn } from 'react-icons/lia'
import { TbBrandGithubFilled } from 'react-icons/tb'
import { TiSocialTwitter } from 'react-icons/ti'

const social = () => {
    return (
        <>
            <Link className='p-1 rounded-full  bg-slate-500 text-white  hover:bg-gray-950  duration-500     text-xl dark:text-white dark:bg-slate-700  dark:hover:bg-gray-950    dark:duration-500' href={'https://github.com/Khadar-abdi'}><TbBrandGithubFilled /></Link>
            <Link className='p-1 rounded-full bg-slate-500 hover:bg-gray-950 duration-500 dark:hover:bg-gray-950  text-white text-xl dark:bg-slate-700' href={'https://x.com/khadaer_'}><TiSocialTwitter /> </Link>

            <Link className='p-1 rounded-full bg-slate-500 hover:bg-sky-600 duration-500 dark:hover:bg-sky-600  text-white text-xl dark:bg-slate-700' href={'https://www.linkedin.com/in/khadar-abdi-38a9ab218/'} ><LiaLinkedinIn /> </Link>

        </>
    )
}

export default social