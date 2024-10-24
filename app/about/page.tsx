import React from 'react'
import AboutMe from '@/components/About/aboutMe'
import Experiance from '@/components/About/Experiance'
import Education from '@/components/About/Education'
export const dynamic = 'force-dynamic';

const About = () => {
  return (
    <>
    <div className='flex flex-col lg:w-[65%] md:w-[90%] p-5 w-screen md:pr-8 my-6 '>
    <AboutMe/>
    <Experiance/>
    <Education/>
    </div>
      
      
    </>
  )
}

export default About