import React from 'react';
import { SocialIcon } from "react-social-icons";

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 flex flex-row items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5'>
        <div className='flex flex-row items-center'>
            {/* {Social icons} */}
            <SocialIcon
              url="https://www.linkedin.com/in/jakub-iwaszkiewicz-635bb4245/"
              fgColor="gray"
              bgColor='transparent'
              target='_blank'
            />
            <SocialIcon
              url="https://github.com/jakubiwaszkiewicz"
              fgColor="gray"
              bgColor='transparent'
              target='_blank'
            />
            <SocialIcon
              
              url="https://www.facebook.com/kuba.iwaszkiewicz.5/"
              fgColor="gray"
              bgColor='transparent'
              target='_blank'
            />
        </div>
        <a href="mailto: kkuba.iwaszkiewicz@gmail.com">
          <div className='flex flex-row items-center'>
            <div className='flex flex-row items-center'>
                <SocialIcon
                  className='cursor-pointer'
                  network='email'
                  fgColor="gray"
                  bgColor='transparent'
                  target='_blank'
                />
            </div>
            <p className='uppercase hidden md:inline-flex text-sm text-grey-400 cursor-pointer'>
              Get in Touch
            </p>
          </div>
        </a>
    </header>
  )
}