'use client'

import React from 'react'
import Image from 'next/image' 
import { FEATURES } from '@/constants'
import { motion } from 'framer-motion'

type FeatType = {
   title: string,
   icon: string,
   variant:string,
   description:string,
}

const Feat = ({title,icon,variant,description} : FeatType) => {
  return( 
    <>    
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.8}}
    className='flex flex-col h-[300px] w-[300px] xs:w-[400px] lg:h-[400px] lg:w-[500px] lg:px-6 py-4'>
     <div className={`bg-${variant}-50 w-[50px] h-[50px] p-[9px]  lg:first:w-[100px] lg:h-[100px] lg:px-[30px] space-y-[2rem] rounded-full`}>
     <Image 
     src={icon}
     width={50}
     height={50}
     alt={icon}
     className='w-[30px] h-[30px] lg:w-[100px] lg:h-[100px] lg:my-[-10px] '
     />  
     <h2 className='text-[30px] font-bold lg:bold-40 w-[300px] lg:w-[400px] '>{title}</h2>
     <p className='regular-16 bg-white/80 w-[300px] text-justify text-gray-30 xs:w-[350px] md:text-[15px] lg:mt-[30px] '>{description}</p>      
    </div>      
    </motion.div>
    </>

  )
}

function Featuers() {
  return (
    <section className='mx-auto px-[2rem] pt-[4rem] flex flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat '>
      <div className=' relative my-[2rem]  '>
        <Image 
            src='/camp.svg'
            width={50}
            height={50}
            alt='camp'
           className=' absolute top-[-90%] lg:top-[-45%] hover:top-[-60%] transition-all'
        />
        <h2 className='bold-40 lg:bold-64'>Our Features</h2>
      </div>

      <div className=' relative lg:flex flex-col justify-around my-[1rem] py-6 w-full '>
       <div className='feature-phone'>
        <Image 
        src='/phone.png'
        width={400}
        height={800}
        alt='phone'
        />
       </div>

       <div className=' flex flex-col gap-[6rem]  md:grid md:grid-cols-2 md:gap-[2rem] md:ml-[1rem] xl:ml-[30rem] '>
       {FEATURES.map( (features) => (

            <Feat
             title={features.title}
             icon={features.icon} 
             variant={features.variant} 
             description={features.description} 
             />
       )
       )}
       </div>
      </div>

    </section>
  )
}

export default Featuers
