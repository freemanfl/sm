import React from 'react'
import Logo from '../images/logo.svg'

const Nav = () => {
  return (
        <nav className="fixed flex justify-between w-full h-20 px-1 md:px-12 bg-bgTrans backdrop-blur-md z-50 ">
                  <div className="logo w-20 h-20 min-w-fit min-h-fit items-center justify-center ">
                      <img src={Logo} alt="logo" className='h-full w-full scale-75 hover:bg-greenTint'/>
                  </div>
                  <ul className="menu flex items-center justify-end space-x-8 cursor-pointer">
                      <li className='text-hone hover:text-sec'><span className='text-sec'>01.</span> About</li>
                      <li className='text-hone hover:text-sec'><span className='text-sec'>02.</span> Work</li>
                      <li className='text-hone hover:text-sec'><span className='text-sec'>03.</span> Contact</li>
                      <li className='text-hone hover:text-sec'><button className='border hover:bg-greenTint border-sec py-2 px-4 rounded-md text-sec text-sm'>Resume</button></li>
                      
                  </ul>
          </nav>
  )
}

export default Nav