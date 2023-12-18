import React from 'react'
import Image from 'next/image'
import { Logo, QMark } from '../assets'
export const Navbar = () => {
  return (
    <nav className='flex justify-between p-5 pl-10 pr-20 w-full h-20 bg-white '> 
      <Image src={Logo} alt='craxino' className='w-[15%] h-[40px]'/>
      <Image src={QMark} alt='craxino'  className='w-[2.5%] h-[30px]'/>
    </nav>
  )
}

 
