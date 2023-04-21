import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link"

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 flex flex-row items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* {Social icons} */}
        <SocialIcon
          url="https://www.linkedin.com/in/jakub-iwaszkiewicz-635bb4245/"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
        />
        <SocialIcon
          url="https://github.com/jakubiwaszkiewicz"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
        />
        <SocialIcon
          url="https://www.facebook.com/kuba.iwaszkiewicz.5/"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
        suppressHydrationWarning
       >
        
          <div className="flex flex-row items-center"> 
              <SocialIcon
                url="#contact"
                className="cursor-pointer"
                network="email"
                fgColor="gray"
                bgColor="transparent"
              />
          </div>
          <Link href="#contact">
            <p className="uppercase hidden md:inline-flex text-xs text-gray-400 cursor-pointer">
              Get in Touch
            </p>
          </Link>
      </motion.div>
    </header>
  );
}
