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
          className="w-[100px] h-[100px] rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center"
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
          <ul className='list-disc space-y-2 ml-5 text-lg my-1 h-[225px] overflow-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#aa4a44]/80'>
            <li className=''>Summary point Summary point Summary point Summary point Summary</li>
            <li className=''>Summary point Summary point Summary point Summary point Summary</li>
            <li className=''>Summary point Summary</li>
            <li className=''>Summary point Summary</li>
            <li className=''>Summary point Summary</li>
            <li className=''>Summary point Summary</li>
          </ul>
        </div>
    </article>
  )
}

export default ExperienceCard