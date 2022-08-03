import React from 'react'
import Image from 'next/image'

export default function PageImage({title,imageUrl,image,style,bgHeight}) {
  return (
    <div 
    style={{ 
      backgroundImage: `url(${imageUrl})` 
    }}
    className= {`font-lulo  w-screen  ${bgHeight} relative   bg-cover bg-bottom  bg-no-repeat	flex items-center justify-center lg:bg-center`}>
    <div className='relative  w-[1000px]  h-full lg:hidden'>
   
    </div>
    <div className='absolute h-full w-full bg-black bg-opacity-40 '></div>

      <h1 className={`absolute tracking-tighter  text-center text-white ${style} `} >

      Business<br/>Development<br/>&<br/>Strategy

      </h1>
  </div>
  )
}
