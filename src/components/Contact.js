import React from 'react'

const Contact = () => {
  return (
    <section className='relative w-full  h-screen flex flex-col items-center justify-center '>
        {/* header  */}
        <div className="wrapper w-3/6 flex flex-col items-start space-y-8">
              <div className='flex items-end justify-start w-full gap-3 h-7'>
                      <h1 className='text-sec text-2xl'>03.</h1>
                      <h1 className='text-hone text-4xl font-semibold'> Contact me</h1>
                      <div className='flex h-full items-center pl-2'><div className="h-[1px] w-40 bg-zinc-800"></div></div>
              </div>
              
              <p className='w-4/6 text-htwo'>I’m  currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
              <button className='border hover:bg-greenTint border-sec p-4 rounded-md text-sec'><a href="mailto:mm.farid@post.cz">Say hello</a></button> 
        </div>
      
        <p className='absolute bottom-1 text-hone text-xs'>Copyright smth.</p>
    </section>
  )
}

export default Contact