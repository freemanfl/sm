import React from 'react'

const Hero = () => {
  return (
    <section className='w-full space-y-4 h-screen flex flex-col items-start justify-center '>
        <h1 className='text-xl text-sec'>Hi, my name is</h1>
        <h1 className='md:text-7xl text-5xl font-bold text-hone'>Shira Green</h1>
        <h1 className='md:text-7xl text-5xl font-bold text-htwo'>I build things for the web.</h1>
        <p className='text-md text-htwo max-w-screen-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate v</p>
        <button className='border hover:bg-greenTint border-sec p-4 rounded-md text-sec'>Check out my something!</button>
    </section>
  )
}

export default Hero