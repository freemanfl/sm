import {useMemo, useState} from 'react'
import Logo from '../images/logo.svg'

const Navbar = () => {

  const [activeIndex, setActiveIndex] = useState(0);

 

  return (
   <nav className="md:py-5 py-1 nav flex flex-row sticky justify-between bg-white items-center top-0 z-10 ">
      <div className="flex space-x-2 ">
        <img src={Logo} alt="logo" className='cursor-pointer' />
        <div className="title">
            <h1 className='font-mon md:text-base text-xs font-bold text-white'>.</h1>
            <h1 className='font-mon md:text-base text-xs font-bold cursor-pointer'>SHIRA</h1>
            <h1 className='font-mon md:text-base text-xs font-bold cursor-pointer'>GREEN</h1>
        </div>
      </div>
      <ul className='hidden md:flex items-center space-x-10'>
        <li className='font-mon text-base font-normal cursor-pointer'><a href="#work">WORK</a></li>
        <li className='font-mon text-base font-normal cursor-pointer'><a href="#about">ABOUT</a></li>
        <li className='font-mon text-base font-normal cursor-pointer'><a href="#contact">CONTACT</a></li>
      </ul>
      <div className="md:hidden w-10 h-10 p-2 flex flex-col items-center justify-around border-black">
          <div className="w-full h-1 bg-black"></div>
          <div className="w-full h-1 bg-black"></div>
          <div className="w-full h-1 bg-black"></div>
      </div>
      
     
      <ul className='absolute flex hidden w-full py-12 space-y-4 border rounded-2xl bg-white  translate-y-full z-10 flex-col items-center justify-between'>
            <li className='font-mon h-full text-base font-normal cursor-pointer'><a href="#work">WORK</a></li>
            <li className='font-mon h-full  text-base font-normal cursor-pointer'><a href="#about">ABOUT</a></li>
            <li className='font-mon h-full  text-base font-normal cursor-pointer'><a href="#contact">CONTACT</a></li>
      </ul>
   </nav>
  )
}

export default Navbar