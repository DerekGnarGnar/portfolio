import React from 'react';
import {MdExpandMore} from 'react-icons/md';
import burbanklogo from '../public/bhlogo.png';
import henhouse from '../public/HenHouse-Seal-CircleLogo-FullColor.jpg';
import Link from 'next/link';
import Image from 'next/image';

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            title: 'Burbank Housing Site Update',
            imageSrc: burbanklogo,
            url: "burbankhousing"
        },
        {
            id: 2,
            title: 'HenHouse Webstore',
            imageSrc: henhouse,
            url: "henhouse"
        }
    ];


  return (
    <div id='portfolio' className='w-full'>

     <div className='max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left'>
        <h2 className='text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold'>Portfolio</h2>
        <p className='py-4 max-w-lg'>
          Check out some of the projects that I have gotten to work on recently!
        </p>
        <div className='max-w-5xl mx-auto grid md:grid-cols-2 gap-8'>
            {portfolios.map((
                {id, title, imageSrc, url}) => (
                    <Link key={id} href={`/portfolio/${url}`}>
                        <div className='cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md'>
                            <Image src={imageSrc} alt={title} className='rounded-md duration-200 hover:scale-105' />
                            <h2 className='text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4'>{title}</h2>
                        </div>
                    </Link>
                )
                )}
        </div>
        <div className='flex items-center justify-center'>
        <Link href="/portfolio">
          <div className='group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer'>
            all projects
            <span className='-rotate-90 duration-100 ease-in group-hover:translate-x-5'>
              <MdExpandMore size={25} />
            </span>
          </div>
        </Link>

        </div>
     </div>
    </div>
  )
}

export default Portfolio;
