import React from 'react'
import Link from 'next/link'
export default function HeaderItem({title,Goto,section}) {
  return (
        <a onClick={()=>{Goto(section,true)}}>
          
        <span  className="cursor-pointer text-center   tracking-wider	 text-gray-700 hover:text-white  transition-all duration-300 ease-in-out " >
        {title}

        </span>
        </a>
  )
}
