import React from 'react';
import heroImage from '../public/derekhero.jpeg';
import {MdExpandMore} from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div id="home" className='w-full text-center'>
      <div className='max-w-screen-xxl max-auto w-full h-full pt-24 p-4 flex flex-col justify-around items-center'>
        <div className='w-64 h-100 mx-auto my-auto overflow-hidden rounded-xl'>
          <Image src={heroImage} alt='derek with barrels' />
        </div>
        <h1 className='uppercase font-bold text-gray-700 text-6xl'>Full Stack Developer</h1>
        <p className='text-gray-600 text-xl max-w-sm mx-auto'>Highly professional and energetic web developer and content manager. 
        Currently, my passions include surfing, guitar, craft beer, and building web applications using React, Next.js, and CSS TailWind
        </p>
        <Link href="/#about">
          <div className='group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer'>
            Know More
            <span className='-rotate-90 duration-100 ease-in group-hover:rotate-0'>
              <MdExpandMore size={25} />
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default HomePage;
