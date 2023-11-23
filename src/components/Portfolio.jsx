//create your own pictures from chatgpt4

import React from 'react';
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg';
import installNode from '../assets/portfolio/installNode.jpg';
import navbar from '../assets/portfolio/navbar.jpg';
import reactParallax from '../assets/portfolio/reactParallax.jpg';
import reactSmooth from '../assets/portfolio/reactSmooth.jpg';
import reactWeather from '../assets/portfolio/reactWeather.jpg';

const Portfolio = () => {

    const portfolioData = [
        {
            id: 1,
            src: arrayDestruct,
            link: 'https://github.com/tanmaygandhi2901/microfrontend'
        },
        {
            id: 2,
            src: installNode,
            link: 'https://github.com/tanmaygandhi2901/microfrontend'
        },
        {
            id: 3,
            src: navbar,
            link: 'https://github.com/tanmaygandhi2901/microfrontend'
        },
        {
            id: 4,
            src: reactParallax,
            link: 'https://github.com/tanmaygandhi2901/microfrontend'
        },
        {
            id: 5,
            src: reactSmooth,
            link: 'https://github.com/tanmaygandhi2901/microfrontend'
        },
        {
            id: 6,
            src: reactWeather,
            link: 'https://github.com/tanmaygandhi2901/microfrontend'
        }
    ]

  return (
    <div name="portfolio" className='min-h-max bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    Portfolio
                </p>
                <p className='py-6'>
                    Check out some of my work right here
                </p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

            {
                portfolioData.map((portfolio) => 
                    <div key={portfolio.id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={portfolio.src} alt="" className='rounded-md duration-200 hover:scale-105' />
                        <div className='flex items-center justify-center'>
                            <button onClick={() => window.open(portfolio.link, "_blank")} className='w-full px-6 py-3 m-4 duration-200 hover:scale-105'>
                                Code
                            </button>
                        </div>
                    </div>
                )
            }
                </div>

        </div>
    </div>
  )
}

export default Portfolio