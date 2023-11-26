import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='min-h-screen w-full h-max bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 bordergray-500'>Contact</p>
                <p className='py-6'>Submit the below to get in touch with me!</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/cf494065-8ed1-45be-8dc6-c29364a7c47e" method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name='name' placeholder='Enter your nane' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                    <input type="email" name='email' placeholder='Enter your email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                    <textarea name='message' rows={10} className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' placeholder='Enter your message' />
                    <button className='text-white mt-4 bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3  mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact