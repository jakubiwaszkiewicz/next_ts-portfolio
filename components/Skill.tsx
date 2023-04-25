import React from 'react'
import { motion } from "framer-motion"
import { Skill as SkillType } from "@/typings"
import { urlFor } from '@/sanity';

type Props = {
    skill: SkillType;
    directionLeft?: boolean;
    
}

function Skill({ skill, directionLeft }: Props) {
    console.log(skill)
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
            initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
                x: 0,
            }}
            transition={{
                duration: 1,
            }}
            src={urlFor(skill?.image).url()}

            className='rounded-xl border border-gray-500 object-cover
            w-24 h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 easy-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
        easy-in-out group-hover:bg-white h-24 w-24 xl:w-28 xl:h-28 rounded-xl z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className=" text-md font-bold text-black opacity-100">
                    {skill.progress}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Skill