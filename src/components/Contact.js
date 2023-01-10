import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='h-[750px] space-y-6  flex flex-col justify-center'>
        <h1 className='text-[36px] font-mon font-bold'>HIT ME UP</h1>
        <div>
            <p className='font-mon text-base font-normal'>Get in touch via <a href='#' className='text-sec '>email</a> or <a  href='#'className='text-sec'>LinkedIn</a></p>
            <p className='font-mon text-base font-normal'>Check more of my work on my <a  href='#'className='text-sec'>Behance</a>.</p>
        </div>
    </div>
  )
}

export default Contact