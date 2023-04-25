import React from 'react'
import { motion } from "framer-motion";
import { PageInfo } from "@/typings"
import { urlFor } from '@/sanity';

type Props = {
    pageInfo: PageInfo;
}

function About({ pageInfo }: Props) {


  return (
    <motion.div
        initial={{
            opacity: 0,
        }}
        whileInView={{
            opacity: 1,
        }}
        transition={{
            duration: 1,
        }}
        className='flex flex-col relative h-screen text-center md:text:left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
        <h3 className='sectionTitle'>About</h3>
        <motion.img
            src={urlFor(pageInfo?.profileImage).url()}
            initial={{
                x: -200,
                opacity: 0,
            }}
            whileInView={{
                x: 0,
                opacity: 1,
            }}
            transition={{
                duration: 0.5,
            }}
            viewport={{ once: true }}
            className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[450px] xl:h-[500px]'
        />

        <motion.div
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
            className='space-y-10 px-0 md:px-10'
        >
            <h4 className="text-4xl font-semibold">
                Hello <span className='underline decoration-[#AA4A44]/80 tracking-widest underline-offset-8'>there!</span> 
            </h4>
            <p className='md:text-base text-sm'>
                {pageInfo?.backgroundInformation}
            </p>
        </motion.div>
    </motion.div>
    
  )
}

export default About