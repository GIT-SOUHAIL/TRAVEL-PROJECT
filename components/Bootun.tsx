'use client'

import Image from "next/image"
type ButtonProps = { 
 type : 'button' | 'submit' ;
 text : string ;
 icon? : string ;
 variant : string
}

const Bootun = ({text , type , icon , variant} : ButtonProps) => {
  return (

    <button
    className={`flexCenter gap-3 rounded-full border ${variant}`}
      type={type}
    >
      {icon && <Image src={icon} alt={text} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">{text}</label>
    </button>



  )
}

export default Bootun
