import React from 'react'
import { motion } from "framer-motion";

type Props = {}

function About({}: Props) {


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
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl transform -translate-x-[-10px]'>About</h3>
        <motion.img
            src="/prof-sesja-2.png"
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
            <p className='text-md text-justify'>
                I'm a tech-savvy second-year student of ICT at the Wrocław University of Technology. You can catch me creating some slick websites like a pro(toplast)!
                In my quest for experience, I've taken on some pretty wild jobs. I've rocked a hard hat as a construction assistant in Bonn,
                lifted boxes as a warehouse worker at Amazon in Wrocław, and even put together some of BMW's coolest G30 as a on-board computer assembler in Munich.
                Nowadays, you can find me at the Student Organization Best Wroclaw, where I'm the IT Coordinator. I'm also flexing my design skills by whipping up some graphics for the Best Symposium on Education event.
                But wait, there's more! I'm on the hunt for my first gig in IT, and I think your company might just be the perfect fit.
                In the long run, I'm striving to be a full-stack developer and take on the world one code at a time.
            </p>
        </motion.div>
    </motion.div>
    
  )
}

export default About