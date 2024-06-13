'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.section
     initial={{opacity:0}}
     whileInView={{opacity:1}}
     transition={{duration:1.8}}
     className=' mx-auto flex flex-col  py-[2rem] sm:mt-[2rem]  px-6 '>
     <div className='flex flex-col md:flex-row gap-[2rem] sm:gap-[1rem] mx-auto sm:space-x-4 md:space-x-[1rem] lg:space-x-[4rem]'>
     <div className='mx-auto sm:ml-0'><Image src='hilink-logo.svg' alt='hilink' width={80} height={80} className='min-w-[70px]' /></div>    
     <ul className=' hidden md:inline-block space-y-4'>
      <li className='bold-20'>Learn More</li>
      <li>About Hilink</li>
      <li>Press Releases</li>
      <li>Environment</li>
      <li>Jobs</li>
      <li>Privacy Policy</li>
      <li>Contact Us</li>
     </ul>
     <ul className=' hidden md:inline-block space-y-4'>
      <li className='bold-20'>Our Community</li>
      <li>Climbing xixixi</li>
      <li>Hiking hilink</li>
      <li>Hilink kinthill</li>
     </ul>
     <ul className=' hidden md:inline-block space-y-4'>
      <li className='bold-20'>Contact Us</li>
      <li>Admin Officer: 0614168877</li>
      <li>Email Officer: souhailmagrane@gmail.com</li>
     </ul>
     <ul className='space-y-4'>
      <li className='bold-20 hidden sm:inline-block'>Social</li>
      <li className='flex items-center justify-end sm:flex-col xl:flex-row gap-4 min-w-[80px] space-x-5'>
        <span><Image width={30} height={30} src='/facebook.svg' alt='facebook' className='min-w-[30px]' /></span>
        <span><Image width={30} height={30} src='twitter.svg' alt='twiter' className='min-w-[30px]' /></span>
        <span><Image width={30} height={30} src='/instagram.svg' alt='instagram' className='min-w-[30px]' /></span>
        <span><Image width={30} height={30} src='/youtube.svg' alt='youtube' className='min-w-[30px]' /></span>
        <span><Image width={30} height={30} src='/wordpress.svg' alt='woedpress' className='min-w-[30px]' /></span>
      </li>
     </ul>
      </div>
      <div className='mx-auto'>
      <div className='mx-auto mt-[3rem] border-[1px] border-gray-300 w-[15rem] sm:w-[23rem] md:w-[26rem] lg:w-[40rem] xl:w-[64rem]' />
      <h2 className='text-center my-[2rem]'>2024  Hilink Souhail Mougrane | All rights reserved</h2>
      </div>
  
    
    </motion.section>
  )
}

export default Footer
