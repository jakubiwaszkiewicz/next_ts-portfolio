import { Inter } from "next/font/google";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import { ArrowLongUpIcon } from '@heroicons/react/24/solid'
import Link from "next/link";
import { Experience, PageInfo, Project, Skill, Social } from "@/typings";
import { fetchExperience } from '@/utils/fetchExperience'
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchSocials } from "@/utils/fetchSocials";
import { GetStaticProps } from "next/types";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

const inter = Inter({ subsets: ["latin"] });

export default function Home({pageInfo, experiences, skills, projects, socials}:Props) {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y overflow-y-scroll
    overflow-x-hidden snap-mandatory z-0 scrollbar scrollbar-track-gray-400/20
    scrollbar-thumb-[#aa4a44]/80 scroll-smooth">
      {/* {Header} */}

      <Header
        socials = {socials}
      />

      {/* {Hero} */}
      <section id="hero" className="snap-start">
        <Hero
          pageInfo={pageInfo}
        />
      </section>
      {/* {About} */}
      <section id="about" className="snap-center">
        <About
          pageInfo={pageInfo}
        />
      </section>
      {/* {Experience} */}
      <section id="experience" className="snap-center">
        <WorkExperience
          experiences={experiences}
        />
      </section>
      {/* {Skills} */}
      <section id="skills" className="snap-center">
        <Skills
          skills={skills}
        />
      </section>
      {/* {Projects} */}

      <section id="projects" className="snap-start">
        <Projects
          // projects={projects}
        />
      </section>

      {/* {Contact Me} */}
      <section id="contact" className="snap-start">
        <ContactMe
          // pageInfo={pageInfo}
        />
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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperience();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    // Next.js will attempt to re-generate the page:
    // When a request comes in
    // At most once every 10 seconds
    revalidate: 10,
  }
}