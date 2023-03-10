import Link from 'next/link';
import React, { useState } from 'react';
import {FaBars, FaTimes, FaInstagram, FaGithub, FaLinkedin} from 'react-icons/fa';

const Navbar = () => {

    const [navigation, setNavigation] =  useState(false)
    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'portfolio'
        },
        {
            id: 3,
            link: 'about'
        },
        {
            id: 4,
            link: 'contact'
        }
    ]
  return (
    <div className='w-full h-20 z-10 fixed bg-white text-black duration-300 ease-in'>
      <div className='flex justify-between items-center w-full h-full max-w-screen-xl mx-auto p-4'>
        <Link href='/#home'>
            <h1 className='text-3xl lg:text-4xl font-bold uppercase underline underline-offset-2 tracking-wider cursor-pointer'>Derek</h1>
        </Link>
      <div>
        <ul className='hidden md:flex'>

            {
                links.map (({id, link}) => (
                   
                    <Link key={id} href={`/#${link}`}>
                    <li className='ml-10 text-sm uppercase cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider'>
                        {link}
                    </li>
                </Link>
                
                )
                )
            }
        </ul>

            { !navigation && (
                    <div className="md:hidden cursor-pointer" onClick={() => setNavigation(true)} >
                    <FaBars size={30} />
            
                    </div>

                )}
        </div>
      </div>
      
      {/* Color gradient */}
      <div className={ navigation ? 'md:hidden fixed left-0 top-0 w-full h-full bg-black/70 backdrop-blur' : ""}>
      <div className={ navigation ? 'fixed left-0 top-0 w-4/5 h-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-10 ease-in duration-500' : 'fixed top-0 left[-100%] p-10 h-full ease-in duration-500'}>
        <div>
            <div className='flex w-full items-center justify-between'>
                <Link href='/#home'>
                    <h2 className='text-3xl font-bold uppercase underline underline-offset-2 tracking-wider cursor-pointer'>Derek</h2>
                </Link>
                <div onClick= {() => setNavigation(false) } className='p-3 cursor-pointer'>
                    <FaTimes size={30} />
                </div>
            </div>
        </div>

      </div>
    </div>


    </div>
  )
}

export default Navbar;

