import React from 'react'
import Laptop from '../images/laptop.svg'

const Project = ({bg, imgUrl, link, title, text}) => {
  return (
    <div style={{backgroundColor: bg,}}className='project w-[90%] aspect-video rounded-[40px] flex px-14 justify-between '>
        <div className="project-content flex flex-col items-start justify-center w-1/4 h-full space-y-7">
            <h1 className='text-base font-mon text-white'>{title}</h1>
            <p className='leading-6 text-lg lg:text-xl font-bold font-mon text-white'>{text}</p>
            <a href={link} className='leading-5 border-b border-white text-white'>Read more</a>
        </div>
        <img src={imgUrl} alt="laptop"className='max-w-[485px] w-64  lg:w-full translate-x-36 mb-4' />
    </div>
  )
}

export default Project