'use client'

import Image from 'next/image'
import React from 'react'
import Bootun from './Bootun'
import {motion} from 'framer-motion'
const Hero = () => {
  return (
    <motion.section
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:1.8}}

    className='mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 flex flex-col 
                        gap-20 py-10 pv-32 md:gap-28 lg:py-20 xl:flex-row'>
    <div className='hero-map'/>

    {/* LEFT */}
    <div className=' relative flex flex-1 z-20  flex-col xl:w-1/2'>
      <Image   
      src='/camp.svg'
      width={50}
      height={50}
      alt='camp'
      className=' absolute left-[-5px] top-[-32px] w-10 lg:w-[50px] hover:top-[-40px] transition-all'
      />
      <h1
      className=' bold-52 xl:bold-88 xl:w-[35rem]'>Putuk Truno Camp Area</h1> 
      <p className=' regular-16 mt-6 text-justify text-gray-30 xl:max-w-[530px]'>
      We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible
      beauty of nature. We can help you on an adventure around the world in just one app
      </p>
      <div className=' my-11 flex flex-wrap gap-[8rem]'>
      <div className='flex items-center gap-2'>
        {Array(5).fill(1).map((val,index) =>(
         <Image
         src='/star.svg'
         key={index}
         width={24}
         height={24}
         alt='star'
         />
        ))}
      </div>
      <p className='bold-16 lg:bold-20 text-blue-70 w-fit'>
       190K 
      <span className='regular-16 lg:regular-20 ml-1'>
      Excellent Reviews
      </span>
      </p>
      </div>
      <div className='flex  w-full gap-4 flex-col xl:flex-row  lg:w-[30rem] md:w-[20rem] sm:w-[20rem]'>
        <Bootun
        text='Download App'
        type='button'
        variant='btn_green'
         />
        <Bootun
        icon='/play.svg'
        text='How We Work?'
        type='button'
        variant='btn_white_text '
         />
      </div>
    </div> 

    <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90
                       hover:scale-[1.2] transition-all px-7 py-8">

           <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image className='hover: animate-spin' src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Aguas Calientes</p>
          </div>

          <div className="flexBetween ">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">2.040 km</p>
            </div>
          </div>
        </div>
      </div>

    </motion.section>
  )
}

export default Hero
