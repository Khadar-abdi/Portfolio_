 
import React from 'react'
import { DiJavascript1, DiMongodb, DiReact } from 'react-icons/di'

import { FaCss3Alt, FaGitAlt, FaHtml5, FaNodeJs } from 'react-icons/fa'
 
import {   RiNextjsLine, RiTailwindCssFill  } from 'react-icons/ri'
import { SiExpress, SiPostman, SiShadcnui } from 'react-icons/si'
import { TbBrandGithubFilled } from 'react-icons/tb'

const tech = () => {
    return (
        <div className='py-5 flex flex-col flex-wrap justify-center items-center  '>
            <div className='flex flex-col justify-center items-center space-y-5 flex-wrap'>
                <h2 className='font-pop text-[#42446E] dark:text-[#a9acdb] text-2xl font-bold'>My Tech Stack</h2>
                <h4 className='font-pop text-[#666666] dark:text-[#cecdcd] text-base font-extralight '> Technologies I’ve been working with recently</h4>
            </div>
            <div className='py-10 flex flex-row flex-wrap   gap-9  justify-center items-center' >
                <div className="tooltip   " data-tip="Html5">

                    <span className=' btn bg-transparent border-none hover:bg-transparent  text-5xl text-slate-500 hover:text-orange-400 duration-500    '><FaHtml5 /></span>
                </div>
                <div className="tooltip " data-tip="Html5">
                    <span className=' btn bg-transparent border-none hover:bg-transparent text-5xl text-slate-500 hover:text-sky-400  duration-500 '><FaCss3Alt /></span>
                </div>
                <div className="tooltip " data-tip="JavaScript">

                <span className='btn bg-transparent border-none hover:bg-transparent text-5xl text-slate-500 hover:text-yellow-400  duration-500  '><DiJavascript1 /></span>
                </div>
                <div className="tooltip " data-tip="React">

                <span className=' btn bg-transparent border-none hover:bg-transparent text-5xl text-slate-500 hover:text-sky-400 duration-500  '><DiReact /></span>
                </div>
                <div className="tooltip " data-tip="NextJs">
                    
                <span className='btn bg-transparent border-none hover:bg-transparent text-5xl text-slate-500 dark:hover:text-white  hover:text-black  duration-500  '><RiNextjsLine /></span>
                </div>
                <div className="tooltip " data-tip="TaiwlwindCss">

                <span className='btn bg-transparent border-none hover:bg-transparent text-5xl text-slate-500 hover:text-sky-400  duration-500 '><RiTailwindCssFill /></span>
                </div>
                <div className="tooltip " data-tip="NodeJs">

                <span className='btn bg-transparent border-none hover:bg-transparent text-5xl text-slate-500 hover:text-green-600  duration-500 '><FaNodeJs /></span>
                </div>
                <div className="tooltip " data-tip="Expressjs">

                <span className='btn bg-transparent border-none hover:bg-transparent text-5xl text-slate-500 hover:text-white  duration-500 '><SiExpress /></span>
                </div>
                <div className="tooltip " data-tip="Postman">

                <span className='btn bg-transparent border-none hover:bg-transparent text-5xl text-slate-500 hover:text-orange-600 duration-500 '><SiPostman /></span>
                </div>
                <div className="tooltip " data-tip="Git">

                <span className='btn bg-transparent border-none hover:bg-transparent text-5xl text-slate-500 hover:text-[#DE4C36]  duration-500  '><FaGitAlt /></span>
                </div>
                <div className="tooltip " data-tip="GitHub">

                <span className=' btn p-3 rounded-full  bg-transparent text-dark border-slate-500 border-2 dark:border-slate-700  hover:bg-gray-950 hover:text-white  duration-500     text-2xl dark:text-white dark:bg-slate-700   dark:hover:bg-gray-950    dark:duration-500'  ><TbBrandGithubFilled /></span>
                </div>
                <div className="tooltip " data-tip="MongoDb">

                <span className='btn bg-transparent border-none hover:bg-transparent text-5xl text-slate-500 hover:text-[#41cc80]  duration-500  '><DiMongodb /></span>
                </div>
                <div className="tooltip " data-tip="shadcn">

                <span className='btn bg-transparent border-none hover:bg-black text-3xl text-slate-500 hover:text-[#ffffff]  duration-500  '><SiShadcnui /></span>
                </div>

            </div>
        </div>
    )
}

export default tech