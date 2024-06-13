'use client'

import Link from "next/link"
import Image from "next/image"
import { NAV_LINKS } from "@/constants"
import Bootun from "./Bootun"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

const Navabar = () => {
  const [bar , setBar] = useState(true)
  const change = () => {
    setBar(prev => !prev)
  }
  return (
    <motion.nav
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:1.5}}
    className="flex  justify-between items-center mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 relative z-30 py-5  ">
    <Link className="" href='/'>
    <Image src="/hilink-logo.svg" width={74} alt="logo" height={29} />
    </Link>     
    <ul className=" hidden h-full gap-12 lg:gap-4 lg:flex space-x-6 sxl:space-x-2 ">
          {NAV_LINKS.map((val) => (
           <Link href={val.href} key={val.key} 
           className=" text-gray-50 cursor-pointer  transition-all hover:font-bold" >{val.label}
           </Link>
          ))}
    </ul>

    <AnimatePresence>
    {
      bar && ( 
        <motion.div
        initial={{y:-400}}
        animate={{y:0}}
        transition={{duration:0.5}}
        exit={{y:-400}}
        className=" absolute md:hidden top-0 right-0  w-screen h-[65vh]  z-40 backdrop-blur-md bg-white/30">
        <Image onClick={()=> change()} src='/close-2.png' alt="cloes" width={39} height={39} className=" absolute  right-5 top-4  active:scale-[1.2]" />
        <ul className="  md:hidden h-full gap-4 flex  flex-col  space-y-4 mt-[6rem]  ">
        {NAV_LINKS.map((val) => (
         <Link href={val.href} key={val.key} 
         className=" text-[30px]   justify-center font-semibold hover:text-green-600 hover:scale-[1.2] cursor-pointer mx-auto  transition-all hover:font-bold" >{val.label}
         </Link>
        ))}
       </ul>
       </motion.div>
      )
    }
    </AnimatePresence>
    <div className=" hidden lg:flex">
        <Bootun
          text='Login'
          type='button'
          icon='/user.svg'
          variant='bg-green-90 px-[1.5rem] py-3 text-white transition-all hover:bg-green-50'
          />
    </div>
    <Image onClick={()=> change()} src='/menu.svg' width={32} height={32} alt="menu" className=" inline-block cursor-pointer lg:hidden" />
    </motion.nav>
  )
}

export default Navabar

