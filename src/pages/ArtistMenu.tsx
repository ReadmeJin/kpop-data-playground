import { useEffect } from 'react'
import gsap from 'gsap'
import SplitType from 'split-type'
import Marquee from "react-fast-marquee";
import useBreakpointValue from '../hooks/useBreakpointValue';
import MenuLink from '../components/MenuLink';

type MenuItemType = {
    label: string;
    slug: string;
}

const menuItems: MenuItemType[] = [
    { label: "Girls' Generation", slug: "girls-generation" },
    { label: "BlackPink", slug: "blackpink" },
    { label: "BTS", slug: "bts" },
    { label: "NCT 127", slug: "nct-127" }
]

type Props = {}

export default function ArtistMenu({ }: Props) {

    useEffect(() => {
        const splitter = new SplitType(".menu__artist", {
            types: 'words,chars',
            charClass: "menu__artist--char",
            wordClass: "mr-2 lg:mr-5 overflow-hidden"
        })
        gsap.from(splitter.chars, {
            opacity: 0,
            yPercent: 120,
            ease: "Power3.InOut",
            duration: 0.4,
            stagger: 0.025,
        })
        gsap.fromTo(".menu__artist--char", { backgroundPositionX: "100%" }, { backgroundPositionX: "0%", duration: .05, delay: 0.05, stagger: 0.04 })
    }, [])

    const speed = useBreakpointValue({ base: 50, md: 100 }, { fallback: 'md' })
    return (
        <div className='menu w-screen h-screen overflow-hidden'>
            <section className='menu__container w-full h-full mx-auto py-[20vh] lg:py-[10vh]'>
                <ul className='menu__block flex flex-col items-stretch h-full'>
                    {menuItems.map(({ label, slug }, menuIndex) => {
                        return (
                            <li key={`menu-item-${menuIndex}`} className='menu__column h-1/4 w-auto text-center relative flex items-center justify-center'>
                                <MenuLink menuLabel={label} slug={slug} />
                                <Marquee
                                    style={{ position: 'absolute' }}
                                    className='left-0 top-0 h-full text-[90px] sm:text-[125px] xl:text-[220px] opacity-0 overflow-hidden select-none peer-hover:opacity-10 transition-opacity'
                                    gradient={false}
                                    speed={speed}
                                    direction={(menuIndex % 2 === 0) ? "left" : "right"}
                                >
                                    {Array(10).fill(label).map((marquee, idx) => <span key={`marquee-${marquee}-${idx}`} className='uppercase mx-5'>{marquee}</span>)}
                                </Marquee>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </div>
    )
}