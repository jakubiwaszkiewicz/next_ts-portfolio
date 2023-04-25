import React from 'react'
import { motion } from "framer-motion"
import { Experience } from "@/typings"
import { urlFor } from '@/sanity';
type Props = {
  experience: Experience;
}

function ExperienceCard({ experience }: Props) {
  return (
    <article className='flex flex-col justify-center items-center space-y-7 flex-shrink-0 w-[500px] h-[550px] md:w-[600px]
    xl:w-900px snap-center bg-[#292929] opacity-40 hover:opacity-100 transition-opacity duration-200 cursor-pointer p-10 overflow-hidden'>
        <motion.img
          initial={{
            y: -100,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.5
          }}
          viewport={{once: true}}
          className="w-[100px] h-[100px] rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center"
          src={urlFor(experience?.companyImage).url()}
          alt=""
        />
        <div className='px-0 md:px-10'>
          <h4 className='text-4xl font-light'>IT COORDINATOR</h4>
          <p className='font-bold text-2xl mt-1'>BEST Wroclaw</p>
          <div className='flex space-x-2 my-2'>
            {experience.technologies.map(technology => (
              <img
                key={technology._id}
                className="h-10 w-10 rounded-full"
                src={urlFor(technology.image).url()}
              />
            ))}
          </div>
          <p className="uppercase py-5 text-gray-300">
              {new Date(experience.dateStarted).toDateString()} -{" "}
              {experience.isCurrentlyWorkingHere
              ? "Present"
              : new Date(experience.dateEnded).toDateString()}
            </p>
          <ul className='list-disc space-y-4 ml-5 text-lg h-80 overflowscroll-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#aa4a44]/80'>
            {experience.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
    </article>
  )
}

export default ExperienceCard