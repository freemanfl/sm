import React from 'react'
import Typewriter from 'typewriter-effect';
import DashedFlower from '../images/dashed-flower.svg'

const Hero = () => {
  return (
    <section className='hero  h-[75vh] flex flex-col items-start justify-center leading-[96px]  z-0'>
        <h1 className='z-30 text-[80px] text-black font-bd font '>Hi,</h1>
        <h1 className='z-30 text-[80px] text-black font-bd font '>I'm <span className='z-10 shira-flower relative'>Shira</span> and I'm a</h1>

        <Typewriter 
            className=''
            options={{
                strings: ['Product', 'Experience', '"I need it ASAP"', 'Solution'],
                autoStart: true,
                loop: true,
            }}
            />
        <h1 className='text-[80px] text-black font-bd font '>designer</h1>
        <img className='absolute scale-150 left-64 z-20' src={DashedFlower} alt="flower" />
    </section>
  )
}

export default Hero