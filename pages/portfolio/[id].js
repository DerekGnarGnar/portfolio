import React from "react";
import burbanklogo from "../../public/bhlogo.png";
import henhouse from "../../public/HenHouse-Seal-CircleLogo-FullColor.jpg";
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { AiOutlineCaretRight } from "react-icons/ai";
import { BiChevronLeft } from "react-icons/bi";
import { MdExpandMore } from "react-icons/md";

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
const getPortfolioFrom = (url) => portfolios.filter((p) => p.url === url)[0];

export async function getStaticPaths() {
  const paths = portfolios.map((p) => ({
    params: { id: p.url },
  }));
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({params}) {
  const portfolio = getPortfolioFrom(params.id)
  return{
    props: {portfolio}
  }
}

const OnePortfolio = ({portfolio: {title, imageSrc}}) => {
  return (
    <div className="h-fit w-full text-center">
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-8 flex flex-col">
        <div className="flex">
          <Link href="/portfolio">
            <div className="flex items-center justify-center my-8 text-indigo-500 font-bold capitalize tracking-wider cursor-pointer">
              <BiChevronLeft size={25} /> back
            </div>
          </Link>
        </div>
        <h1 className="capitalize text-4xl mt-2 mb-8 text-center md:text-left font-bold text-blue-500 tracking-wider">
         {title}
        </h1>
        <div className="relative w-96 h-56 mx-auto overflow-hidden my-8">
          <Image src={imageSrc} alt="bla" layout="fill" objectFit="cover" />
        </div>
        <h2 className="text-center md:text-left my-4 text-2xl font-bold">
          Description
        </h2>
        <p>I will put some more text in here</p>
        <div className="flex items-center justify-center gap-10">
          <Link href="/">
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              demo
              <span className="duration-200 ease-in">
                <AiOutlineCaretRight size={18} className="ml-2" />
              </span>
            </div>
          </Link>
          <Link href="https://github.com/DerekGnarGnar">
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              Portfolio
              <span className="duration-200 ease-in">
                <FaGithub size={18} className="ml-2" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OnePortfolio;
