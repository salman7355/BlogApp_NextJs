import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='items-center flex justify-between h-12 text-sm'>
      <div>&copy;2023 EX, All Rights Reserved.</div>
      <div className='flex items-center gap-3 opacity-[0.6] cursor-pointer'>
        <Image src='/1.png' alt='/' width={15} height={15}/>
        <Image src='/2.png' alt='/' width={15} height={15}/>
        <Image src='/3.png' alt='/' width={15} height={15}/>
      </div>
    </div>
  )
}

export default Footer