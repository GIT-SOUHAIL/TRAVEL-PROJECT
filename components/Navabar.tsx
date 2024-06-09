'use client'

import Link from "next/link"
import Image from "next/image"
import { NAV_LINKS } from "@/constants"
import Bootun from "./Bootun"
import { motion } from "framer-motion"

const Navabar = () => {
  return (
    <motion.nav
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:1.5}}
    className="flex justify-between items-center mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 relative z-30 py-5  ">
    <Link className="" href='/'>
          <Image src="/hilink-logo.svg" width={74} alt="logo" height={29} />
    </Link>     
    <ul className=" hidden h-full gap-12 lg:flex space-x-6 sxl:space-x-2 ">
          {NAV_LINKS.map((val) => (
           <Link href={val.href} key={val.key} 
           className=" text-gray-50 cursor-pointer  transition-all hover:font-bold" >{val.label}
           </Link>
          ))}
    </ul>
    <div className=" hidden lg:flex">
        <Bootun
          text='Login'
          type='button'
          icon='/user.svg'
          variant='bg-green-90 px-[1.5rem] py-3 text-white transition-all hover:bg-green-50'
          />
    </div>
    <Image src='/menu.svg' width={32} height={32} alt="menu" className=" inline-block cursor-pointer lg:hidden" />
    </motion.nav>
  )
}

export default Navabar

