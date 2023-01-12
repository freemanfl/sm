import {useMemo, useState} from 'react'
import Project from './Project'

const UiWorks = () => {

    const uiWorks = useMemo(()=>  [
        {
            title: 'Octopus.Healths',
            text: 'Solution for chronically ill patients that needs to smth smth',
            bg: 'blue',
            imgUrl: '../images/laptop.svg',
            link: '#69B1E5',
        },
        {
            title: 'Octopus.Healtha',
            text: 'Solution for chronically ill patients that needs to smth smth',
            bg: 'green',
            imgUrl: '../images/laptop2.svg',
            link: '#',
        },
        {
            title: 'Octopus.Healthd',
            text: 'Solution for chronically ill patients that needs to smth smth',
            bg: '#69B1E5',
            imgUrl: '../images/laptop.svg',
            link: '#',
        
        }, 
        {
            title: 'Octopus.Healthj',
            text: 'Solution for chronically ill patients that needs to smth smth',
            bg: '#69B1E5',
            imgUrl: '../images/laptop.svg',
            link: '#',
        }
       ]
       );  
  return (
    <div className='projects space-y-16 flex flex-col w-full items-start '>
        {uiWorks.map((project) => <Project key={project.title} bg={project.bg} title={project.title} text={project.text} imgUrl={project.imgUrl} link={project.link} />)}
    </div>
  )
}

export default UiWorks