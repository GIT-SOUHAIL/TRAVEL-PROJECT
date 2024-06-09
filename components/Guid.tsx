'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'


function Guid() {
  return (
    <motion.section 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.8}}
    className='mt-[2rem] flex flex-col px-2 mx-auto bg-feature-bg bg-left-top bg-clip-border bg-cover bg-no-repeat'>
      <div className='flex mx-[1rem] flex-col justify-around items-center lg:flex-row gap-11 '>
      <div className='ml-[1rem] lg:ml-0 relative'>
      <Image 
      src='/camp.svg'
      width={50}
      height={50}
      alt='camp'
      className=' absolute top-[-49px] hover:top-[-60px] transition-all'
      />
      <h3 className='uppercase regular-18 -mt-1 mb-3 text-green-50'>WE ARE HERE FOR YOU</h3>
      <h2 className='bold-40 lg:bold-64 xl:max-w-[390px]'>Guide You to Easy Path</h2>
      </div>
      <div className='  max-w-[350px] 1xl:max-w-[700px] lg:max-w-[500px] ml-[1rem] text-justify'>
       <p>Only with the hilink application you will no longer get lost and get lost again, because we already
        support offline maps when there is no internet connection in the field. Invite your friends, relatives
        and friends to have fun in the wilderness through the valley and reach the top of the mountain</p>
      </div>
    </div>

     <div className=' relative flex flex-col mt-11 '>
     <Image 
      src='/van.png'
      width={1420}
      height={520}
      alt='boat'
      className=' mx-auto rounded-[40px] h-[310px] 1xl:max-w-[680px] lg:h-[420px] xl:h-[500px] max-w-[400px] lg:max-w-[1000px] xl:max-w-[1320px]'
      />
     <div 
          className=" md:absolute mx-auto my-4 flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md 4xl:left-[25%]  md:top-[14%] md:left-[10%] lg:left-[15%] lg:top-[15%]">
          <Image 
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
          <div className='flex w-full flex-col'>
          <div className="flexBetween w-full">
          <p className="regular-16 text-gray-20">Destination</p>
          <p className="bold-16 text-green-50">48 min</p>
          </div>
          <p className="bold-20 mt-2">Aguas Calientes</p>
          </div>
          <div className='flex w-full flex-col'>
          <p className="regular-16 text-gray-20">Start track</p>
          <h4 className="bold-20 mt-2 whitespace-nowrap">Wonorejo Pasuruan</h4>
          </div>
          </div>
      </div>
      </div>

    </motion.section>

  )
}

export default Guid
