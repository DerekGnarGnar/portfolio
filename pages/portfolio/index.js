import React from "react";
import { MdExpandMore } from "react-icons/md";
import burbanklogo from "../../public/bhlogo.png";
import henhouse from "../../public/HenHouse-Seal-CircleLogo-FullColor.jpg";
import Link from "next/link";
import Image from "next/image";

export const getStaticProps = async () => {
    const portfolios = [
        {
          id: 1,
          title: "Burbank Housing Site Update",
          imageSrc: burbanklogo,
          url: "burbankhousing",
        },
        {
          id: 2,
          title: "HenHouse Webstore",
          imageSrc: henhouse,
          url: "henhouse",
        },
      ];
return {
    props: {portfolios}
}
}

const Oneportfolio = ({portfolios}) => {
 

  return (
    <div id="portfolio" className="w-full">
      <div className="max-w-screen-xl mx-auto pt-24 p-4 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold pb-16">
          Portfolio
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {portfolios.map(({ id, title, imageSrc, url }) => (
            <Link key={id} href={`/portfolio/${url}`}>
              <div className="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md">
                <Image
                  src={imageSrc}
                  alt={title}
                  className="rounded-md duration-200 hover:scale-105"
                />
                <h2 className="text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4">
                  {title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Oneportfolio;
