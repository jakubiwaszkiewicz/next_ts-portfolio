import { Inter } from "next/font/google";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import { ArrowLongUpIcon } from '@heroicons/react/24/solid'
import Link from "next/link";

type Props = {
  
}

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y overflow-y-scroll
    overflow-x-hidden snap-mandatory z-0 scrollbar scrollbar-track-gray-400/20
    scrollbar-thumb-[#aa4a44]/80 scroll-smooth">
      {/* {Header} */}

      <Header />

      {/* {Hero} */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      {/* {About} */}
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* {Experience} */}
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      {/* {Skills} */}
      <section id="skills" className="snap-center">
        <Skills />
      </section>
      {/* {Projects} */}

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      {/* {Contact Me} */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link
        href="#hero"
      >
      <footer className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex items-center justify-end mr-10">
          <ArrowLongUpIcon
            className="w-10 h-10 filter hover:text-[#aa4a44] transtion-hover duration-300"
          />
        </div>
      </footer>
      </Link>


    </div>
  );
}

export const getStaticProps = async () => {

}