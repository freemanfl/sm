import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-20 bg-red-400 flex items-start justify-between'>
        <p className='font-mon text-base font-normal '>© Shira Green</p>
        <ul className='flex space-x-2'>
            <li className='flex w-8 h-8 bg-[#05938E] items-center justify-center rounded-full'>Be</li>
            <li className='flex w-8 h-8 bg-[#05938E] items-center justify-center rounded-full'>in</li>
        </ul>
    </div>
  )
}

export default Footer