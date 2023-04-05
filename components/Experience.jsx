import React from 'react';
import html from '../public/logos/html.svg.png';
import css from '../public/logos/css.svg.png';
import javascriptimage from '../public/logos/javascript.svg.png';
import reactimage from '../public/logos/react.svg.png';
import nextjs from '../public/logos/nextjs.svg.png';
import php from '../public/logos/PHP.svg.png';
import node from '../public/logos/node.png';
import Image from 'next/image';
import wordpress from '../public/logos/wordpress.png'

const Experience = () => {

    const experiences = [
        {
            id: 1,
            title: "HTML",
            source: html
         },
         {
            id: 2,
            title: "CSS",
            source: css
         },
         {
            id: 3,
            title: "JavaScript",
            source: javascriptimage
         },
         {
            id: 4,
            title: "React.js",
            source: reactimage
         },
         {
            id: 5,
            title: "Next.js",
            source: nextjs
         },
         {
            id: 6,
            title: "PHP",
            source: php
         },
         {
            id: 7,
            title: "Node",
            source: node
         },
         {
            id: 8,
            title: "Wordpress",
            source: wordpress
         }
    ];

  return (
    <div id='experience' className='w-full'>
          <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
          <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold">
            Experience
        </h2>
        <p className="py-4 max-w-lg">
          Check out some of the projects that I have gotten to work on recently!
        </p>

        <div className="grid lg:grid-cols-4 gap-8">
        {
            experiences.map(({id, title, source }) =>

            (
                <div
              key={id}
              className="flex flex-col lg:flex-wrap gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300
              odd:shadow-rose-400 even:shadow-blue-400"
            >
                    <Image src={source} width="64px" height="64px" loading="lazy" alt={title} />
                    <h3 className='font-light'>
                        {title}
                    </h3>
                </div>
            ))}
    </div>
        </div>
      
    </div>
  );
};

export default Experience;
