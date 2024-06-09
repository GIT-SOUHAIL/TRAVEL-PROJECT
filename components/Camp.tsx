'use client'

import Image from "next/image"
import { PEOPLE_URL } from "@/constants"
import { motion } from "framer-motion"
type typecamp = {
   title : string ;
   subtitle : string ;
   peaple : string ;
   bgImg: string
}

const  Campsite = ({bgImg , title ,subtitle , peaple} : typecamp) => {
 return (
  <motion.div 
  initial={{opacity:0}}
  whileInView={{opacity:1}}
  transition={{duration:1.8}}
  className={` mx-2 h-[300px]  lg:h-[600px] min-w-[400px]  12md:ml-2 lg:min-w-[1000px] ${bgImg} bg-cover bg-no-repeat rounded-[20px] hover:scale-[0.96] transition-all lg:rounded-5xl 2xl:rounded-5xl`}>
  <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
   <div className="flexCenter gap-4">
     <div className="rounded-full bg-green-50 p-4  transition-all ">
       <Image
         src="/folded-map.svg"
         alt="map"
         width={28}
         height={28}
       />
     </div>
     <div className="flex flex-col gap-1">
       <h4 className="bold-18 text-white hidden lg:inline-block">{title}</h4>
       <p className="regular-14 text-white">{subtitle}</p>
     </div>
   </div>

   <div className="flexCenter gap-6">
     <span className="flex -space-x-4 overflow-hidden">
       {PEOPLE_URL.map((url) => (
         <Image 
           className="h-10 w-10 rounded-full hidden lg:inline-block "
           src={url}
           key={url}
           alt="person"
           width={52}
           height={52}
         />
       ))}
     </span>
     <p className="bold-16 md:bold-20 text-white hidden lg:inline-block">{peaple}</p>
   </div>
  </div>
 </motion.div>
 )

}


const Camp = () => {
  return (
    <section className='mx-auto max-w-[1440px] 
                        relative  flex flex-col py-10 lg:mb-10 xl:mb-20 lg:py-20'>
    
    <div className='hide-scrollbar flex  h-[340px] lg:h-[600px] xl:h-[640px]
                    w-full items-start justify-start gap-8 overflow-x-auto'>
    <Campsite
       bgImg ='bg-bg-img-4'
       title ='Putuk Truno Camp'
       subtitle='Putuk Truno Camp'
       peaple='50k+ joined'

    />
    <Campsite
        bgImg ='bg-bg-img-2'
        title ='Putuk Truno Camp'
        subtitle='Putuk Truno Camp'
        peaple='50k+ joined'
    />
        <Campsite
        bgImg ='bg-bg-img-1'
        title ='Putuk Truno Camp'
        subtitle='Putuk Truno Camp'
        peaple='50k+ joined'
    />
        <Campsite
        bgImg ='bg-bg-img-5'
        title ='Putuk Truno Camp'
        subtitle='Putuk Truno Camp'
        peaple='50k+ joined'
    />
        <Campsite
        bgImg ='bg-bg-img-6'
        title ='Putuk Truno Camp'
        subtitle='Putuk Truno Camp'
        peaple='50k+ joined'
    />
    </div>
    
    <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6 ">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[664px] xl:rounded-5xl xl:px-16 xl:py-20 animate-up-down transition-all relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That's why we are here for those of you who want to start an adventure
          </p>
          <Image 
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>

    </section>
  )
}

export default Camp
