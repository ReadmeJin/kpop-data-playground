import React from 'react'
import { Link } from '@tanstack/react-location'
import { IoIosStar } from 'react-icons/io'
import { IoSearchOutline } from 'react-icons/io5'
import { AnimatePresence, motion, Variants } from 'framer-motion'
import { useArtist } from '../../providers/ArtistProvider'
import AnimatedText from '../AnimatedText'


export default function Header() {
  const { artist } = useArtist();

  // Framer Motion variant object, for controlling animation
  const item: Variants = {
    initial: {
      y: 200,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1.2 }
    },
    animate: {
      y: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1.2 }
    },
    exit: {
      y: 200,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1.2 }
    }
  };
  
  const container: Variants = {
    visible: {
        transition: {
            staggerChildren: 0.05,
            duration: 1
        }
    },
    hidden: {
      transition: {
          staggerChildren: 0.05,
          duration: 1
      }
  }
};

  return (
    <header className="fixed top-0 left-0 w-screen px-8 py-10 z-[1]">
      <div className="flex flex-nowrap items-center">
        <div className="flex-none">
          <Link to="/" className="relative logo oval-decoration">
            <span className="text-xl bg-cream dark:bg-black">
              K <IoIosStar className="inline pb-1"/> STAR
            </span>
          </Link>
        </div>
        <div className="flex-auto flex items-center justify-center h-14">
          <h2 className="absolute left-[50%] -translate-x-1/2 text-2xl uppercase overflow-hidden h-[inherit] w-full pointer-events-none">
           {/*  <AnimatePresence>
              {!!artist && <motion.span
                key={artist}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="block"
                variants={container}
                >
                  <AnimatedText type="heading2" text={artist}/>
                </motion.span>}
            </AnimatePresence> */}
          </h2>
        </div>
        <div className="flex-none z-10">
          <Link
            to="artists"
            className="text-2xl inline-flex"
          >
            <IoSearchOutline title="Search"/>
          </Link>
        </div>
      </div>
    </header>
  )
}
