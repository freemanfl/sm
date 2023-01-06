import React from 'react'

const Card = () => {
  return (
    <div className="card flex flex-col justify-around w-full  aspect-3/4 p-4 bg-bgCard rounded-md shadow-md ">

        <div className="mid flex flex-col space-y-2 items-start w-full">
           <a href="#"><h1 className='transition duration-300 text-2xl font-bold text-hone hover:text-sec'>Google Keep Clone</h1></a>
            <p className='text-lg text-htwo'>Building a custom smth lorem plugin in Wordpress and Spotify design</p>
        </div>
        <div className="bottom flex list-none space-x-1 w-full">
            <li className='hover:bg-prim p-2 rounded-md text-sm text-htwo cursor-pointer transition'>Algolia</li>
            <li className='hover:bg-prim p-2 rounded-md text-sm text-htwo cursor-pointer transition'>Wordpress</li>
            <li className='hover:bg-prim p-2 rounded-md text-sm text-htwo cursor-pointer transition'>PHP</li>
        </div>
    </div>
  )
}

export default Card