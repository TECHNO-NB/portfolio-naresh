import React from 'react'
import Image from 'next/image'
import typescipt  from "@/image/typescript.png"
import python  from "@/image/python.png"
import javascript  from "@/image/javascript.png"
import nextjs  from "@/image/nextjs.png"
import reactnative  from "@/image/react native.png"
import nodejs  from "@/image/nodejs.png"


import mongodb  from "@/image/mongodb.png"
import expressjs  from "@/image/expressjs.png"
import django from "@/image/django.png"
import html  from "@/image/html.png"
import docker  from "@/image/docker.png"
import tailwind  from "@/image/tailwind.png"



const SkillsComp = () => {
  return (
    <div className="flex  w-[100vw] flex-col justify-center items-center mt-36 px-4 md:px-0"> 
    <div className=' mt-2'>
     <h1 className='text-2xl  font-bold md:text-4xl px-4 md:px-0'>Languages known:</h1>
   <div className="flex gap-6 mt-6  px-4 justify-center items-center md:px-0">
     <div className='flex gap-4 items-center justify-center'>
       <Image src={typescipt} height={40}alt='typescript'/>
     <h1 className='text-2xl hidden md:block'>Typescript</h1>
     </div>
     <div className='flex gap-0 items-center justify-center'>
       <Image src={javascript} height={60} alt='typescript'/>
     <h1 className='text-2xl hidden md:block'>Javascript</h1>
     </div>
     <div className='flex gap-2 items-center justify-center'>
     <Image src={python}   height={50}  alt='typescript'/>
     <h1  className='text-2xl hidden md:block '>Python</h1>
     </div>
   </div>
   </div>
   <div className=" mt-4">
    <h1 className='text-2xl  font-bold md:text-4xl'>Tools and frameworks:</h1>
    <div className="flex flex-wrap gap-10 mt-6 ">
      <Image src={nextjs} className='bg-white w-20'  alt="dd"/>
      <Image src={reactnative} className='w-10'   alt="dd"/>
      <Image src={nodejs}  className='w-10' alt="dd"/>
      <Image src={docker} className='w-10'  alt="dd"/>
      <Image src={django} className='w-10' width={0}  height={0} alt="dd"/>
      <Image src={expressjs} className='bg-white w-10'  alt="dd"/>
      <Image src={html}  height={0} width={0} className='w-10'  alt="dd"/>
      <Image src={mongodb} className='bg-white w-10'  height={70} alt="dd"/>
      <Image src={tailwind} width={0} className='w-10'  height={0} alt="dd"/>
    </div>
   </div>
 </div>
  )
}

export default SkillsComp