import React from 'react'
import Image from 'next/image'

export default function PageImage({title,imageUrl,image,style,bgHeight}) {
  return (
    <div 
    style={{ 
      backgroundImage: `url(${imageUrl})` 
    }}
    className= {`font-lulo  w-screen  ${bgHeight} relative bg-fixed   bg-cover bg-center  bg-no-repeat	flex items-center justify-center`}>
    <div className='relative  w-full  h-full lg:hidden'>
    <Image
      layout='fill'
      alt="Main Image"
      src={imageUrl}
      priority
      />
    </div>
    <div className='absolute h-full w-full bg-black bg-opacity-40 '></div>

      <h1 className={`absolute tracking-tighter  text-center text-white ${style} `} >

      Business<br/>Development<br/>&<br/>Strategy

      </h1>
  </div>
  )
}
