import React from 'react'
import Photo from '../images/photo.jpg'

const About = () => {
  return (
    <section className='relative w-full space-y-4 h-screen flex flex-col items-center justify-center '>
        {/* header  */}
        <div className="wrapper w-4/6 space-y-4 ">
              <div className='flex items-end w-full gap-3 h-7'>
                      <h1 className='text-sec text-2xl'>01.</h1>
                      <h1 className='text-hone text-4xl font-semibold'> About me</h1>
                      <div className='flex h-full items-center pl-2'><div className="h-[1px] w-40 bg-zinc-800"></div></div>
              </div>
              <div className='inner space-x-8 w-full h-full flex flex-col md:flex-row '>
                    <div className="w-3/6 h-full space-y-4">
                          <p className=' text-htwo'>Hello! My name is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                          <p className=' text-htwo'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </p>
                          <p className=' text-htwo'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim </p>
                          <ul className='h-16 flex flex-col flex-wrap text-htwo gap-4'>
                              <li className='flex w-20 justify-between before:content-["▹"]'>Tech one</li>
                              <li className='flex w-20 justify-between before:content-["▹"]'>Tech one</li>
                              <li className='flex w-20 justify-between before:content-["▹"]'>Tech one</li>
                              <li className='flex w-20 justify-between before:content-["▹"]'>Tech one</li>
                              <li className='flex w-20 justify-between before:content-["▹"]'>Tech one</li>
                              <li className='flex w-20 justify-between before:content-["▹"]'>Tech one</li>
                          </ul>
                    </div>
                    
                    <div className="group relative w-2/5 rounded-md h-4/6 ">
                      <div className="transition duration-150 linear group-hover:-translate-y-5 group-hover:-translate-x-5  absolute w-full h-full  border-2 border-sec rounded-md top-10 left-10"></div>
                      <img src={Photo} alt='photo' className="rounded-md absolute w-full h-full transition linear bg-im"></img>
                    </div>
              </div>
        </div>
      
        
    </section>
  )
}

export default About