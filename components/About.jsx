import React from 'react';
import { MdExpandMore } from 'react-icons/md';
import Link from 'next/link';

const About = () => {
  return (
    <div>
      <div>
      <div id='about' className='w-full'>
        <div className='max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left'>
        <h2 className='text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold'>About me</h2>
        <div className='shadow-xl shadow-blue-300 py-8 px-8'>
            <p className='pr-4 max-w-2xl mx-auto'>
                Thank you for checking out my page! Since graduating from UC Davis with a background in Music and Economics, I persued a 
                career in freelance music journalism before going back to school in 2021 to complete my degree in Full-Stack Development.
            </p>
            <p className='pr-4 max-w-2xl mx-auto'>
                When I&#39;m not working on web applications or updating the HenHouse website, you can find me surfing, playing music in my local bands
                or travelling the world with my partner. 
            </p>
        </div>
      <div className='flex items-center justify-center gap-10'>
        <Link href="/resume.pdf" download={true}>
        <div className='group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer'>
          Resume
            <span className='-rotate-90 duration-100 ease-in group-hover:rotate-0'>
              <MdExpandMore size={25} />
            </span>
          </div>
        </Link>
        <Link href="/#portfolio">
        <div className='group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer'>
          Portfolio
            <span className='-rotate-90 duration-100 ease-in group-hover:rotate-180'>
              <MdExpandMore size={25} />
            </span>
          </div>
        </Link>
      </div> 
        </div>
    </div>
      </div>
    </div>
  )
}

export default About;
