import React from 'react'


import { BackgroundGradientDemo } from '@/components/ResumeComp'
import Footer from '@/components/Footer'

const page:React.FC = () => {
  return (
    <div className=' flex items-center justify-center text-center w-[100vw] mt-40 px-2'>
        <BackgroundGradientDemo/>
        <Footer/>
    
    </div>
  )
}

export default page