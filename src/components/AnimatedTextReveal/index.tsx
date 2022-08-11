import React from 'react';
import cn from 'classnames';
import { useInView } from 'react-intersection-observer';
import SplitType from 'split-type';
import gsap from 'gsap';

type Props = {
    target: string | HTMLElement | ArrayLike<HTMLElement> | (HTMLElement | ArrayLike<HTMLElement>);
    charClass: string | undefined;
    className?: string | undefined;
    children: React.ReactChildren | React.ReactChild
}

export default function AnimatedTextReveal({ target, charClass, className, children }: Props) {
    const [ref, inView] = useInView({ threshold: 0, triggerOnce: true, delay: 100 });

    React.useEffect(() => {
        if (charClass) {
            const splitter = new SplitType(target, {
                types: "chars",
                charClass: cn('translate-y-full', charClass)
            })
            if (inView) {
                gsap.to(`.${charClass}`, {
                    y: 0,
                    ease: "0.455, 0.03, 0.515, 0.955",
                    stagger: 0.025,
                    delay: 0.4
                })
            }
        }
    }, [inView])

    return (
        <span ref={ref} className={cn("overflow-hidden", className)}>{children}</span>
    )
}