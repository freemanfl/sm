import React from 'react'
import about1 from '../images/about1.svg'
import about2 from '../images/about2.svg'

const About = () => {
  return (
    <section className='about-container relative h-96  mt-12 flex flex-col items-center justify-center bg-[#D8D6D61A]'>
        <div className='about w-5/6  md:w-4/6  flex flex-col h-full justify-center  space-y-6 items-start'>
          <h1 className='max-w-full relative font-mon text-[16px] md:text-[27px] text-grey2 cursor-pointer font-bold'>ABOUT</h1>
          <div className='flex'>
                <div className="about-text w-2/3 space-y-3">
                    <p className='font-mon text-base font-normal '>As a designer with over a decade of experience based in Israel, I have had the opportunity to work with a diverse group of people and speak multiple languages.</p>
                    <p className='font-mon text-base font-normal '>I take great satisfaction in identifying and improving design weaknesses to elevate the overall experience.</p>
                    <p className='font-mon text-base font-normal '>Additionally, I am enthusiastic about continually learning and meeting new people.</p>
                </div>
                <div className="about-images flex flex-col w-2/3 items-end space-y-4">
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