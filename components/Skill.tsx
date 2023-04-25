import React from 'react'
import { motion } from "framer-motion"
import { Skill as SkillType } from "@/typings"
import { urlFor } from '@/sanity';

type Props = {
    skill: SkillType;
    directionLeft?: boolean;
    
}

function Skill({ skill, directionLeft }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
            initial={{
                x: directionLeft ? -100 : 100,
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
                x: 0,
            }}
            transition={{
                duration: 0.5,
            }}
            viewport={{ once:true }}
            src={urlFor(skill?.image).url()}

            className='rounded-2xl border border-gray-500 object-cover
            w-20 h-20 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 easy-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-70 transition duration-300
        easy-in-out group-hover:bg-white h-20 w-20 xl:w-24 xl:h-24 rounded-xl z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className=" text-md font-bold text-black opacity-100">
                    {skill.progress}%
                </p>
            </div>
        </div>
    </div>
  )
}

export default Skill