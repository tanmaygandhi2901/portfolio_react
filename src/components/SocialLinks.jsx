import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    Linkedin <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    Github <FaGithub size={30} />
                </>
            ),
            href: 'https://www.linkedin.com',
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:tanmaygandhi2901@gmail.com',
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: '/resume.pdf', //add your resume pdf file to public folder
            style: 'rounded-br-md',
            download: true
        },
    ]

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>

            {
                links.map((data) => {
                    return(
                    <li key={data.id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:rounded-md hover:ml-[-10px] duration-300 bg-gray-500 " + data.style}>
                        <a download={data.download} href={data.href} target='_blank' rel='noreferrer' className='flex justify-between items-center w-full text-white'>
                            {data.child}
                        </a>
                    </li>
                    )
                })
            }

        </ul>
    </div>
  )
}

export default SocialLinks