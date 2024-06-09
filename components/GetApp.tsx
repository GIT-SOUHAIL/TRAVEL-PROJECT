'use client'

import React from 'react'
import Bootun from './Bootun'
import Image from 'next/image'
import { motion } from 'framer-motion'

function GetApp() {
  return (
    <motion.section
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.8}}
     className='12md:h-[135vh] md:h-[70vh] lg:h-[80vh] xl:h-[100vh] h-[70vh] p-4 w-ful'>
      <div className='get-app flex  h-[120vh] relative'>
       <div className='flex flex-col gap-4 lg:max-w-[400px] xl:max-w-[800px]'>
        <h2 className='bold-40 lg:bold-64'>Get for free now!</h2>
        <p className='regular-16 text-justify md:max-w-[300px] lg:max-w-[480px] '>Camping apps offer a digital gateway to the great outdoors, enhancing the traditional
                                   camping experience with modern convenience. From helping you find the perfect campsite amidst nature's
                                  beauty to providing essential survival tips, these apps cater to both novice and seasoned campers. With
                                  features like offline maps and campground reviews, 
                                  they empower adventurers to explore remote destinations while staying connected to vital resources.</p>
        <div className='flex flex-col md:flex-row gap-4 mt-[1rem] lg:mt-[5rem]  '>
        <Bootun
        text='App Store'
        type='button'
        icon='/apple.svg'
        variant='btn_white lg:w-[300px] h-[60px] lg:h-[80px] hover:bg-green-90 hover:text-white'
        />
        <Bootun
        text='App Store'
        type='button'
        icon='/android.svg'
        variant='btn_dark_green lg:w-[300px] h-[60px] lg:h-[80px] hover:bg-green-50 hover:text-white'
        />          
        </div>
       </div>
       <div className=' animate-left-right w-[240px] lg:w-[600px]  h-[900px] mt-[-3rem]  ml-[2rem] md:mt-[0rem] lg:ml-0 xl:absolute lg:right-[1rem] lg:top-[-6rem]'>
        <Image
        src='/phones.png'
        alt='phones'
        width={700}
        height={700}
        className=''
        />
      </div>
      </div>
    </motion.section>
  )
}

export default GetApp
