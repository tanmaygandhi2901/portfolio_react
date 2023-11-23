import React from 'react'
import css from '../assets/css.png';
import github from '../assets/github.png';
import html from '../assets/html.png';
import javascript from '../assets/javascript.png';
import nextjs from '../assets/nextjs.png';
import node from '../assets/node.png';
import react from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import graphql from '../assets/graphql.png';

const Experience = () => {

const experienceData = [
    {
        id: 1,
        imgHref: html,
        altText: 'HTML',
        style: 'shadow-orange-500'
    },
    {
        id: 2,
        imgHref: css,
        altText: 'CSS',
        style: 'shadow-blue-500'
    },
    {
        id: 3,
        imgHref: react,
        altText: 'REACT',
        style: 'shadow-blue-600'
    },
    {
        id: 4,
        imgHref: node,
        altText: 'NODE',
        style: 'shadow-green-500'
    },
    {
        id: 5,
        imgHref: tailwind,
        altText: 'TAILWIND CSS',
        style: 'shadow-sky-400'
    },
    {
        id: 6,
        imgHref: nextjs,
        altText: 'NEXTJS',
        style: 'shadow-white'
    },
    {
        id: 7,
        imgHref: javascript,
        altText: 'JAVASCRIPT',
        style: 'shadow-yellow-500'
    },
    {
        id: 8,
        imgHref: github,
        altText: 'GITHUB',
        style: 'shadow-gray-400'
    },
    {
        id: 9,
        imgHref: graphql,
        altText: 'GRAPHQL',
        style: 'shadow-pink-400'
    },
]
    
  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div >
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>
                    Experince
                </p>
                <p className='py-6'>
                    These are the technologies I've worked with
                </p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {
                    experienceData.map(({id, imgHref, altText, style}) => 
                        <div key={id} className={'shadow-md hover:scale-105 duration-500 py-2 rounded-lg ' + style}>
                            <img src={imgHref} alt={altText} className='w-20 mx-auto' />
                            <p>{altText}</p>
                        </div>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Experience