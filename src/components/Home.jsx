import React from 'react'
import Image from '../assets/img.jpg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='min-h-max w-full pt-20 h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    I'm a Full Stack Developer
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    I'm Tanmay, a passionate Full Stack Developer and dedicated JavaScript enthusiast with nearly 3 years of professional experience. If there's one thing you should know about me, it's that I'm a true JavaScript nerd, always excited about exploring the endless possibilities this language offers.
                </p>
                <div>
                    <Link smooth duration={500} to='portfolio' className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={25} className='m1-1' />
                        </span>
                    </Link>
                </div>
            </div>
            {/* <div className='flex justify-center items-center'>
                <img src={Image} alt="My Profile" className='rounded-2xl mx-auto w-2/3 md:w-full' />
            </div> */}
        </div>
    </div>
  )
}

export default Home