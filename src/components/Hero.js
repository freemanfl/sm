import React from 'react'
import Typewriter from 'typewriter-effect';
import DashedFlower from '../images/dashed-flower.svg'

const Hero = () => {
  return (
    <section className='hero relative h-[95vh] flex flex-col items-start justify-center leading-[96px] overflow-hidden'>
        <h1 className='text-7xl text-black font-bd font '>Hi,</h1>
        <h1 className='text-7xl text-black font-bd font '>I'm Shira and I'm a</h1>

        <Typewriter 
            className='text-[80px] text-black font-bd font-bold green-grad'
            options={{
                strings: ['Product', 'Experience', '"I need it ASAP"', 'Solution'],
                autoStart: true,
                loop: true,
            }}
            />
        <h1 className='text-[80px] text-black font-bd font '>designer</h1>
        <img className='absolute left-64 ' src={DashedFlower} alt="flower" />
    </section>
  )
}

export default Hero