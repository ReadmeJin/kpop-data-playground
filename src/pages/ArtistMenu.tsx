import { useEffect } from 'react'
import gsap from 'gsap'
import SplitType from 'split-type'
import Marquee from "react-fast-marquee";

const menuItems = [
    "Girls' Generation",
    "BlackPink",
    "BTS",
    "NCT 127"
]

type Props = {}

export default function ArtistMenu({ }: Props) {

    useEffect(() => {
        const splitter = new SplitType(".menu__artist", {
            types: 'words,chars',
            charClass: "menu__artist--char whitespace-pre-line clip-text-reveal",
            wordClass: "mr-5 overflow-hidden"
        })
        gsap.from(splitter.chars, {
            opacity: 0,
            yPercent: 120,
            ease: "Expo.InOut",
            duration: 0.4,
            stagger: 0.025,
        })
        gsap.fromTo(".menu__artist--char", { backgroundPositionX: "100%" }, { backgroundPositionX: "0%", duration: .05, delay: 0.05, stagger: 0.04 })
    }, [])

    return (
        <main className='menu w-screen h-screen overflow-hidden'>
            <section className='menu__container w-full h-full mx-auto py-[10vh]'>
                <ul className='menu__block flex flex-col items-stretch h-full'>
                    {menuItems.map((menuLabel, menuIndex) => {
                        return (
                            <li key={`menu-item-${menuIndex}`} className='menu__column h-1/4 w-auto text-center relative flex items-center justify-center'>
                                <a href="#" className='menu__artist container flex items-center justify-center h-full uppercase font-bold xl:text-[125px] whitespace-nowrap peer z-[2]'>
                                    {menuLabel}
                                </a>
                                <Marquee
                                    style={{ position: 'absolute' }}
                                    className='left-0 top-0 h-full xl:text-[300px] opacity-0 overflow-hidden select-none peer-hover:opacity-5'
                                    gradient={false}
                                    speed={500}
                                >
                                    {Array(10).fill(menuLabel).map((marquee, idx) => <span key={`marquee-${marquee}-${idx}`} className='uppercase mx-5'>{marquee}</span>)}
                                </Marquee>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </main>
    )
}