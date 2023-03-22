import React from 'react';
import Image from 'next/image';
import contactme from '../public/contact1.png';
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaTwitter,
    FaLinkedin,
    FaInstagram
  } from "react-icons/fa";

const Contact = () => {
  return (
    <div id='contact' className='w-full'>

     <div className='max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left'>
        <h2 className='text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold'>Contact</h2>

        <div className='flex flex-col md:flex-row gap-8 shadow-xl shadow-blue-300 bg-white mt-4'>
            <div className='w-full md:w-1/2 h-full rounded-xl p-4'>
                <Image src={contactme} alt="dual screen laptop" className='rounded-xl ease-in'/>
                <p className='pt-2 pb-8'>
               Lets work on a project! I am currently looking to take on new work!
            </p>
            <div className='grid grid-cols-2 mx-auto w-4/5 gap-10'>
            <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-300 p-3 hover:scale-105 cursor-pointer">
                  <FaLinkedin size={25} />
                </div>
                <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-300 p-3 hover:scale-105 cursor-pointer">
                  <FaTwitter size={25} />
                </div>
                <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-300 p-3 hover:scale-105 cursor-pointer">
                  <FaInstagram size={25} />
                </div>
                
                <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-300 p-3 hover:scale-105 cursor-pointer">
                  <FaGithub size={25} />
                </div>
                </div>
            </div>
            
           {/*Form stuff*/}
           <div className='w-full md:w-1/2 h-full rounded-xl p-4'>
            <div className='p-4 text-left'>
                <form action="https://getform.io/f/abd99ef2-2d33-4e6a-8c34-1874df79d4a0" method="post">
                    <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                        <div className='flex flex-col'>
                        <lable className='capitalize text-sm py-2 text-slate-600 font-light'>
                            Name
                        </lable>
                        <input type='text' name="name" className='border-2 rounded-lg p-3 flex focus:outline-none border-blue-200' />
                        </div>
                        <div className='flex flex-col'>
                        <lable className='capitalize text-sm py-2 text-slate-600 font-light'>
                            phone
                        </lable>
                        <input type='text' name="phone" className='border-2 rounded-lg p-3 flex focus:outline-none border-blue-200' />
                        </div> <div className='flex flex-col col-span-2'>
                        <lable className='capitalize text-sm py-2 text-slate-600 font-light'>
                            email
                        </lable>
                        <input type='email' name="email" className='border-2 rounded-lg p-3 flex focus:outline-none border-blue-200' />
                        </div> <div className='flex flex-col col-span-2'>
                        <lable className='capitalize text-sm py-2 text-slate-600 font-light'>
                            message
                        </lable>
                        <textarea name='message' rows="10" className='border-2 rounded-lg p-3 flex focus:outline-none border-blue-200' ></textarea>
                        </div>
                    </div>
                <div className='flex items-center justify-center'>
                    <button className='group my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200'>send message</button>
                </div>

                </form>
            </div>
           </div>
        </div>
    </div>
</div>
  )
}

export default Contact;
