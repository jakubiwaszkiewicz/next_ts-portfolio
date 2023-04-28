import React from 'react'
import { motion } from "framer-motion"
import { Project } from "@/typings"
import { urlFor } from '@/sanity'
type Props = {
    projects: Project[]
}

export default function Projects({ projects }: Props) {

  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-2-full
    justify-evenly mx-auto items-center z-0'>
        <h1 className='sectionTitle'>
            Projects
        </h1>

        <div
            className='relative w-full flex overflow-x-scroll overflow-y-hidden
            snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#aa4a44]/80'
        >
            {projects.map((project, i) => (
                <div
                    key={project._id}
                    className='w-screen flex-shrink-1 snap-center flex flex-col space-y-5
                    items-center justify-center p-20 md:p-33 h-screen'
                >
                    <motion.img
                        initial={{
                            y: -300,
                            opacity: 0,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 1,
                        }}
                        viewport={{ once:true }}
                        src={urlFor(project.image).url()}
                        alt=""
                        className='rounded-2xl shadow-xl max-w-[500px] '

                    />
                    <div className='space-y-4 lg:space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-center font-semibold lg:text-4xl text-xl'>
                            <span className="underline decoration-[#AA4A44] text-center underline-offset-8">
                                Project {i + 1} of {projects.length}: 
                            </span>
                            {" "} {project.title}
                        </h4>

                        <div className='flex flex-row items-center justify-center space-x-3'>
                            {project?.technologies.map((technology) => (
                                <img
                                    key={technology._id}
                                    src={urlFor(technology.image).url()}
                                    alt=""
                                    className='md:h-10 md:w-10 w-7 h-7'
                                />
                            ))}
                        </div>

                        <p className='text-sm text-center md:text-left'>
                            {project.summary}
                        </p>
                        
                    </div>
                </div>
            ))}
            
        </div>
        <div className='w-full absolute top-[30%] left-0 h-[500px] bg-[#AA4A44]/20 -skew-y-12'>
        </div>
    </div>
  )
}