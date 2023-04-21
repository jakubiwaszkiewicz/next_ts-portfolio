import React from 'react'
import { motion } from "framer-motion"

type Props = {}

function ExperienceCard({}: Props) {
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
          className="w-32 h-23 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
          src="./best_logo.png"
          alt=""
        />
        <div className='px-0 md:px-10'>
          <h4 className='text-4xl font-light'>IT COORDINATOR</h4>
          <p className='font-bold text-2xl mt-1'>BEST Wroclaw</p>
          <div className='flex space-x-2 my-2'>
            {/* <img
              className='h-10 w-10 rounded-full'
              src=""
              alt=""
            /> */}
            <p>06.2022 - Present</p>
          </div>
          <ul className='list-disc space-y-4 ml-5 text-lg my-1 h-[250px] overflow-scroll overflow-x-hidden snap-y snap-mandatory'>
            <li className='snap-start'>Summary point Summary point Summary point Summary point Summary</li>
            <li className='snap-start'>Summary point Summary point Summary point Summary point Summary</li>
            <li className='snap-start'>Summary point Summary point Summary point Summary point Summary</li>
            <li className='snap-start'>Summary point Summary point Summary point Summary point Summary</li>
            <li className='snap-start'>Summary point Summary point Summary point Summary point Summary</li>
          </ul>
        </div>
    </article>
  )
}

export default ExperienceCard