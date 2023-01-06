import React from 'react'
import Card from './Card'

const Work = () => {
  return (
    <section className='relative w-full  pb-12 flex flex-col items-center justify-start '>
        {/* header  */}
        <div className="wrapper w-4/6 space-y-4 ">
              <div className='flex items-end w-full gap-3 h-7'>
                      <h1 className='text-sec text-2xl'>02.</h1>
                      <h1 className='text-hone text-4xl font-semibold'> My work</h1>
                      <div className='flex h-full items-center pl-2'><div className="h-[1px] w-40 bg-zinc-800"></div></div>
              </div>
              <div className='inner gap-4  w-full h-full grid grid-cols-2 md:grid-cols-3'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
              </div>
        </div>
      
        
    </section>
  )
}

export default Work