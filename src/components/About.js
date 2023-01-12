import React from 'react'
import about1 from '../images/about1.svg'
import about2 from '../images/about2.svg'

const About = () => {
  return (
    <section  className=' h-[750px] w-full  flex justify-center relative '>
        <div className='absolute w-[98vw] h-full bg-aboutBg'></div>
        <div className='about  w-full   flex flex-col h-full justify-center  space-y-6 items-start'>
          <h1 className='relative font-mon text-[16px] md:text-[27px] text-logoBlack cursor-pointer font-bold'>ABOUT</h1>
          <div className='flex flex-col md:flex-row w-full space-y-2'>
                <div className="about-text w-4/6 space-y-3">
                    <p className='font-mon text-sm md:text-base font-normal '>As a designer with over a decade of experience based in Israel, I have had the opportunity to work with a diverse group of people and speak multiple languages.</p>
                    <p className='font-mon text-sm md:text-base font-normal '>I take great satisfaction in identifying and improving design weaknesses to elevate the overall experience.</p>
                    <p className='font-mon text-sm md:text-base font-normal '>Additionally, I am enthusiastic about continually learning and meeting new people.</p>
                </div>
                <div className="about-images flex flex-col w-2/3 sm:items-end items-start space-y-4">
                    <h1 className='font-mon text-base font-normal '>I am also a Batman fan and would kill for pasta.</h1>
                    <div className="flex">
                        <img src={about1} alt="about1" />
                        <img src={about2} alt="about2" />
                        <img src={about1} alt="about1" />
                    </div>
                </div>
          </div>
          


        </div>
    </section>
  )
}

export default About