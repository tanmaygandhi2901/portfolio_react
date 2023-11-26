//create your own pictures from chatgpt4

import React from 'react';
import PortfolioImg from '../assets/portfolio/Portfolio.png';
import Monorepo from '../assets/portfolio/Monorepo.png';
import Clean from '../assets/portfolio/Clean.png';
import Test from '../assets/portfolio/Test.png';
import Supply from '../assets/portfolio/Supply.png';
import Wallet from '../assets/portfolio/Wallet.png';

const Portfolio = () => {

    const portfolioData = [
        {
            id: 1,
            src: PortfolioImg,
            link: 'https://github.com/tanmaygandhi2901/portfolio_react'
        },
        {
            id: 2,
            src: Monorepo,
            link: 'https://github.com/tanmaygandhi2901/microfrontend'
        },
        {
            id: 3,
            src: Clean,
            link: 'https://github.com/tanmaygandhi2901/clean-architecture-nestjs'
        },
        {
            id: 4,
            src: Test,
            link: 'https://github.com/tanmaygandhi2901/react-testing'
        },
        {
            id: 5,
            src: Supply,
            link: 'https://github.com/tanmaygandhi2901/suppychainDRIPP'
        },
        {
            id: 6,
            src: Wallet,
            link: 'https://github.com/tanmaygandhi2901/wallet'
        }
    ]

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 text-white min-h-screen w-full h-max'>
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
                            <button onClick={() => window.open(portfolio.link, "_blank")} className='w-full px-6 py-3 m-4 duration-200 hover:scale-105 font-bold'>
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