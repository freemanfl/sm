import React from 'react'



const Contact = () => {
  return (
    <div  className='h-[750px]  contact space-y-16  flex flex-col justify-center'>
        
        <div>
          <h1 className='text-[36px] font-mon font-bold'>HIT ME UP</h1>
          <div className=' flex flex-col space-y-2'>
              <p className='font-mon text-base font-normal'>Get in touch via <a href='#' className='text-sec '>email</a> or <a  href='#'className='text-sec'>LinkedIn</a></p>
              <p className='font-mon text-base font-normal'>Check more of my work on my <a  href='#'className='text-sec'>Behance</a>.</p>
          </div>
        </div>

        
    </div>
  )
}

export default Contact