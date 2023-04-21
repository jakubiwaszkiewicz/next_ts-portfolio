import React from 'react'
import { motion } from "framer-motion"
type Props = {}

export default function Projects({}: Props) {
    const projects =[1, 2, 3, 4, 5]


  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-2-full
    justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
        </h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#aa4a44]/80'>
            {projects.map((project, i) => (
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-33 h-screen'>
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
                        src="./project-1.png"
                        alt=""
                        className='rounded-2xl shadow-xl'
                    />
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-center font-semibold text-4xl'>
                            <span className="underline decoration-[#AA4A44] text-center underline-offset-8">
                                Case Study {i + 1} of {projects.length}: 
                            </span>
                            {" "} UPS clone
                        </h4>
                        <p className='text-lg text-center md:text-left'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Pellentesque finibus eleifend dui. Quisque vel libero vel purus sodales fermentum at nec erat.
                            Quisque sit amet euismod lorem. Sed seddfgt'p;ikjswdfp;oujhdfslogphdsrtlouhsdflkjugdfgl;kugdslkrtghdl;rskgdfsl;k dolor luctus ex feugiat mattis ut ut nisi.
                            Cras non nibh ac nibh sodales gravida sit amet ac dui. Donec vitae malesuada metus
                            Morbi consequat fringilla posuere. Fusce blandit fringilla ligula, eu vulputate purus commodo in.
                            Maecenas aliquet purus id maximus ultricies.
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