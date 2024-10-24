'use client'
import React, { useEffect, useState } from 'react'

 
import nextjswhite from "@/images/nextjswhite.jpg"
import react from "@/images/reactttt.jpg"
import htmlcss from "@/images/htmlcss.jpg"
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { BiLink } from 'react-icons/bi';
import { TbBrandGithubFilled } from 'react-icons/tb';
import Loading from '../loading';
import { API_URL } from '@/lib/config'




interface Repo {
    id: number;
    name: string;
    private: boolean;
    language: string;
    description: string;
    created_at: string;

};

const Projects = () => {

   

    const [repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchRepos = async () => {
            try {

                setLoading(true)

                // Fetch private repositories from the custom API route
                const response = await axios.get<Repo[]>(`${API_URL}/api/repos`);
                console.log(response)
                setRepos(response.data);
                setLoading(false)
               
            } catch (err) {
                console.log(`Failed to load repositories ${err}`);
                setLoading(false)
            }
        };

        fetchRepos();
    }, []);




    return (

        <div className='py-5 flex flex-col justify-center items-center   rounded-xl '>
            <div className='flex flex-col justify-center items-center space-y-5'>
                <h2 className='font-pop text-[#42446E] dark:text-[#a9acdb] text-2xl font-bold'>Projects</h2>
                <h4 className='font-pop text-[#666666] dark:text-[#cecdcd]text-[#949494] text-base font-extralight'>Things I’ve built so far</h4>
            </div>


{/* 
            <div className='flex  flex-wrap  gap-5 py-10 justify-center items-center'>
                {repos.map((repo, index) => (
                    <div key={repo.id} className="card bg-base-100 w-56 shadow-xl ">
                        <figure>
                            <Image
                                src={Khader}
                                alt='khader'
                            />
                        </figure>
                        <div className="card-body dark:text-slate-500 py-5 text-slate-500 dark:bg-slate-900">
                            <h2 className="card-title dark:text-slate-500 flex-wrap flex-col text-sm text-clip truncate">
                                {repo.name}
                            </h2>
                            <div className={`badge badge-secondary dark:text-slate-300 text-end ${index !== 0 && 'hidden'}`}>NEW</div>
                            <p className='text-wrap text-xs '> {repo.description === null ? repo.name : repo.description}</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline  ">{repo.language}</div>

                            </div>
                        </div>

                    </div>


                ))}
            </div> */}
            {loading && <Loading/>}

            <div className='flex  flex-wrap  gap-5 py-10 justify-center items-center '>
            {repos.map((repo) => (
                <div key={repo.id} className=" bg-transparent dark:bg-slate-900 rounded-lg  w-64 h-96 shadow-sm ">

                    <div className='w-fit '>
                    <Image src={repo.language === "TypeScript" ? nextjswhite : repo.language=== "JavaScript"? react : htmlcss } className='object-cover w-full rounded-md' alt={'project image'}/>
                    </div>
                    <div className='h-fit p-3 pt-3 space-y-2'>
                        <h2 className='text-slate-700 dark:text-slate-400 text-xl font-pop truncate'>{repo.name}</h2>
                        <p className='text-xs text-slate-400 p-2 dark:text-slate-500 font-pop '> {repo.description === null ? repo.name: repo.description}</p>
                        <div className='flex flex-row gap-1  items-center'>
                            <span className='text-sm font-pop text-slate-600 dark:text-slate-400'>Tech Stack :</span>
                            <span className='text-xs text-slate-600 dark:text-slate-400 font-pop'> {repo.language}</span>
                        </div>
                        <div className='flex flex-row justify-between items-center'>
                            <div className='flex flex-row gap-1 justify-center items-center'>
                            <BiLink className='text-xl text-slate-500' />
                            <span className='text-xs flex flex-row font-pop text-slate-600 dark:text-slate-400 hover:text-slate-700 hover:underline'> <a href="#">  Live Preview </a></span>
                            </div>
                            <div className='flex flex-row justify-center items-center gap-1'>

                            <span className='p-1 rounded-full  bg-slate-500 text-white  hover:bg-gray-950  duration-500     text-sm dark:text-white dark:bg-slate-700  dark:hover:bg-gray-950    dark:duration-500'  ><TbBrandGithubFilled /></span>
                            <Link className='text-slate-600 dark:text-slate-400 text-xs font-pop hover:text-slate-700 hover:underline' href={'#'}> Veiw Code </Link>
                            </div>
                        </div>
                    </div>

                </div>
                    ))}
            </div>
            
        </div>
    )
}

export default Projects