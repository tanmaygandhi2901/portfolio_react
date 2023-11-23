import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen;lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>
            <p className='text-xl mt-20'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aliquid, illo magnam totam minima cumque sed aspernatur perspiciatis cupiditate delectus dolores, ipsam incidunt magni commodi odit aliquam! Veritatis, odit odio!
            </p>

            <br />

            <p className='text-xl'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, quia eius. Vero aspernatur dolorum quod. Nihil nam vel voluptate ab eum similique laboriosam cum minima! Dolore nesciunt enim explicabo ipsum.
            </p>
        </div>
    </div>
  )
}

export default About