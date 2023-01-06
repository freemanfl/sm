import React from 'react'
import About from './About';
import Contact from './Contact';
import Hero from './Hero';
import Nav from './Nav';
import Work from './Work';

const Main = () => {
  return (
    <main className='w-[85%] md:w-[75%]  h-auto min-h-[100vh] flex flex-col items-center '>
        <Hero />
        <About />
        <Work />
        
    </main>
  )
}

export default Main