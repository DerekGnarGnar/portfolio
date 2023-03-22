import Head from "next/head";
import About from "../components/About";
import Experience from "../components/Experience";
import HomePage from "../components/HomePage";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <HomePage />
      <Portfolio />
      <Experience />
      <About />
      <Contact />
    </div>
  );
}
