import { motion, Variants } from 'framer-motion';
import React, { useLayoutEffect } from 'react';
import { useArtist } from '../providers/ArtistProvider';
import BlackPinkCover from '../assets/blackpink-cover.webp';
import BTSCover from '../assets/bts-cover.webp';
import classnames from 'classnames';
import AnimatedText from '../components/AnimatedText';
import { Link } from '@tanstack/react-location';

export default function Home() {
    const { setArtist } = useArtist();
    const placeholderText = [
        { type: "heading1", text: "Welcome to the KPOP data playground" },
        { type: "paragraph", text: "Where you can find all data about your favourite KPOP groups & artists" }
    ];
    const container: Variants = {
        hidden:{
            opacity: 0,
            y: 100,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.025,
                duration: 1
            }
        }
    };
    useLayoutEffect(() => {
        setArtist("")
    }, [])


    return (
        <div className="px-8 py-16 flex h-[calc(100vh-155px)]">
            <section className="flex flex-col place-content-start">
                <Link to="/artist/bts" onClick={() => setArtist("bts")}>
                    <GroupCover
                        src={BTSCover}
                        alt="BTS group"
                        side="left"
                    >
                        BTS
                    </GroupCover>
                </Link>
            </section>
            <section className="flex-1 flex flex-col place-content-center">
                <motion.div 
                    className="p-4 relative"
                    initial="hidden"
                    animate="visible"
                    variants={container}
                >
                    <div className="home-content oval-decoration bg-cream dark:bg-black">
                        {placeholderText.map((item, index) => {
                            return <AnimatedText {...item} key={index} />;
                        })}
                    </div>
                </motion.div>
            </section>
            <section className="flex flex-col place-content-end">
                <Link to="artist/blackpink" onClick={() => setArtist("blackpink")}>
                    <GroupCover
                        src={BlackPinkCover}
                        alt="Blackpink group"
                        side="right"
                    >
                        Blackpink
                    </GroupCover>
                </Link>
            </section>
        </div>
    )
}

interface GroupCoverProps {
    src: string, 
    alt: string, 
    className?: string,
    side: 'left' | 'right',
    children?: React.ReactNode
}

const GroupCover = ({src, alt, className, side, children}: GroupCoverProps) => {
    const container: Variants = {
        hidden:{
            opacity: 0,
            x: side === "right" ? 50 : -50,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8
            }
        }
    };
    return (
        <motion.figcaption 
            className={classnames(
                `uppercase text-2xl flex items-center relative cursor-pointer`, 
                className,
                {
                    'flex-row-reverse ml-16': side === "left",
                    'mr-16': side === "right",
                }
            )}
            initial="hidden"
            animate="visible"
            variants={container}
        >
            <motion.img 
                src={src}
                alt={alt}
                className="rounded-md max-w-[300px] aspect-video object-cover"
                whileHover={{scale: 1.05}}
            />
            <caption 
                className={classnames(
                    'absolute',
                    {
                    'writing-rl orientation-mixed -right-[75px]': side === "right",
                    'writing-lr orientation-mixed rotate-180 -left-[75px]': side === "left",
                    }
                )}
            >{children}</caption>
        </motion.figcaption>
    )
}
