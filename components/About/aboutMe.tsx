import React from 'react'

const aboutMe = () => {
  return (
    <div className='flex flex-col gap-4 justify-center '>
        <h2 className='text-[#42446E] dark:text-[#a3a6e2] font-bold text-2xl font-pop'>About Me</h2>
        <p className='font-mono text-[#666666] hover:text-slate-600  dark:text-[#b8b8b8] text-sm leading-6  text-balance flex-wrap  j'>Turning coffee into code, I’m a software developer who brings web ideas to life using JavaScript, TypeScript, Next.js, React, TailwindCSS, Node.js, and MongoDB. With a Bachelor’s degree in Computer Science and hands-on experience, I thrive on creating apps that are as fun to use as they are to build!</p>
    </div>
  )
}

export default aboutMe