import React from 'react'
import FooterPattern from '../images/footer-pattern.svg'


const Footer = () => {
  return (
    <div className='footer w-full relative flex justify-center space-y-12'>
      <div className='absolute w-[98vw] h-32 '><img src={FooterPattern} alt="" /></div>
      <div className='w-full flex justify-between'>
      <p className='font-mon text-base font-normal '>© Shira Green</p>
        <ul className='flex space-x-2'>
            <li className='cursor-pointer font-semibold text-white text-xs flex w-6 h-6 bg-[#05938E] items-center justify-center rounded-full'>Be</li>
            <li className='cursor-pointer font-semibold text-white text-xs flex w-6 h-6 bg-[#05938E] items-center justify-center rounded-full'>in</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer