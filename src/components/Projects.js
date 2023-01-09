import {useMemo, useState} from 'react'
import Project from './Project'

const Projects = () => {

    const projects = useMemo(()=>  [
        {
            title: 'Octopus.Health',
            text: 'Solution for chronically ill patients that needs to smth smth',
            bg: 'red',
            imgUrl: '../images/laptop.svg',
            link: '#69B1E5',
        },
        {
            title: 'Octopus.Health',
            text: 'Solution for chronically ill patients that needs to smth smth',
            bg: '#69B1E5',
            imgUrl: '../images/laptop2.svg',
            link: '#',
        },
        {
            title: 'Octopus.Health',
            text: 'Solution for chronically ill patients that needs to smth smth',
            bg: '#69B1E5',
            imgUrl: '../images/laptop.svg',
            link: '#',
        
        }, 
        {
            title: 'Octopus.Health',
            text: 'Solution for chronically ill patients that needs to smth smth',
            bg: '#69B1E5',
            imgUrl: '../images/laptop.svg',
            link: '#',
        }
       ]
       );  

    const red = 'red';
    const imgUrl = '../images/laptop.svg';

  return (
    <div className='projects space-y-10 flex flex-col w-full items-start '>
       {projects.map((project) => <Project key={project.title} bg={project.bg} title={project.title} text={project.text} imgUrl={project.imgUrl} link={project.link} />)}
    </div>
  )
}

export default Projects