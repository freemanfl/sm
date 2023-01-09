import {useMemo, useState} from 'react'
import Logo from '../images/logo.svg'

const Navbar = () => {

  const [activeIndex, setActiveIndex] = useState(0);

 

  return (
   <nav className="nav flex flex-row sticky justify-between bg-white items-center top-0 z-10 ">
      <div className="flex space-x-2 ">
        <img src={Logo} alt="logo" className='cursor-pointer' />
        <div className="title">
            <h1 className='font-mon text-base font-bold text-white'>.</h1>
            <h1 className='font-mon text-base font-bold cursor-pointer'>SHIRA</h1>
            <h1 className='font-mon text-base font-bold cursor-pointer'>GREEN</h1>
        </div>
      </div>
      <ul className='hidden md:flex items-center space-x-10'>
        <li className='font-mon text-base font-normal cursor-pointer'>WORK</li>
        <li className='font-mon text-base font-normal cursor-pointer'>ABOUT</li>
        <li className='font-mon text-base font-normal cursor-pointer'>CONTACT</li>
      </ul>
      <div className="md:hidden w-12 h-12 bg-black"></div>
   </nav>
  )
}

export default Navbar