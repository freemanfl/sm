import React from 'react'
import Laptop from '../images/laptop.svg'

const Project = ({bg, imgUrl, link, title, text}) => {
  return (
    <div style={{backgroundColor: bg,}}className='project w-[90%]   py-8 px-4 md:px-14 rounded-[40px] flex justify-around '>
        <div className="project-content w-full flex flex-col items-start justify-center   space-y-2 lg:space-y-14">
            <h1 className='text-xs md:text-lg font-mon text-white'>{title}</h1>
            <p className='text-xs md:text-lg  font-bold font-mon text-white lg:w-2/3 xl:w-1/3'>{text}</p>
            <a href={link} className='leading-5 border-b border-white text-white'>Read more</a>
        </div>
        <img src={imgUrl} alt="laptop"className='max-w-[485px] w-36 md:w-64 translate-x-1/3 lg:w-full  ' />
    </div>
  )
}

export default Project