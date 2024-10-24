'use client'

import React from 'react'
import { useSession } from 'next-auth/react'
import { useRouter, redirect } from 'next/navigation';
import Link from 'next/link';


const adminheader = () => {

    const { status, data: session } = useSession();
    const router = useRouter();

    // if(status === 'unauthenticated'){
    //     redirect('khader/signin')

    // }
    // console.log(`this is a session ${session?.user}`)
  return (
    <div className='fixed w-2/12 h-screen '>
        <div className='flex flex-col'>

            <span> {session?.user?.name} </span>

            { session &&   <Link href={'/api/auth/signout'}>
        <span> signout </span>
        </Link>}
       


        </div>
        
    </div>
  )
}

export default adminheader