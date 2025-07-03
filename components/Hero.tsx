import Image from 'next/image'
import React from 'react'
import ecommerce from '@/imgs/imgs.jpg'



export default function Hero() {
  return (
    <div className='images'>
        <Image src={ecommerce} alt={'ecomerces'}/>   
    </div>
  )
}
