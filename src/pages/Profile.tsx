import React, { LegacyRef, Ref, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import classnames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSpotifyArtistTopTracks } from '../hooks/useSpotify';
import { after } from 'underscore';
import tracksJSON from '../api/topTracks.json';
import SplitType from 'split-type'
interface ProfileProps {
	artist: SpotifyApi.SingleArtistResponse,
}

interface CustonImageObject extends SpotifyApi.ImageObject {
	ratio: string, 
	position: string
}
const Profile = ({ artist }: ProfileProps) => {
	const sectionRef: LegacyRef<HTMLDivElement> = useRef(null);
	const [allImagesLoaded, setAllImagesLoaded] = useState(false);
	const { data: tracksData } = useSpotifyArtistTopTracks(artist.id);
	const scrollTimeline = gsap.timeline({paused: true});
	const sectionId = "profile-section";
	let hasScrolled = false;

	// Create a custom array of objects with additional info from SpotifyApI Artist top tracks
	/* const tracksJSON = useMemo(() => {
		if(typeof tracksData === "undefined") return [];
		return tracksData.tracks.reduce((acc: CustonImageObject[], curr) => {
			const random = Math.floor(Math.random() * 3) + 1;
			const ratios = ["aspect-[9/12] max-w-[400px]", "aspect-square max-w-[400px]", "aspect-video max-w-[700px]"];
			const translations = ["-translate-y-[25%]", "translate-y-[40%]", "-translate-y-[50%]"]
			const ratio = ratios[random];
			const position = translations[random];

			const customImageObject = {
				...curr.album.images[0],
				ratio,
				position
			}
			acc.push(customImageObject);
			return acc;
		}, [])
	}, [tracksData]) */

	const goToSection = (section: Element, anim: GSAPTimeline) => {
		if(hasScrolled) {
			gsap.to(window, {
				scrollTo: {
					y: section,
					autoKill: false,
				},
				duration: 1
			});
			if(anim) { anim.restart(); }
		}
	}

    const addAnimation = () => {
			const gallery = sectionRef.current!;
			const totalScroll = gallery.scrollWidth - window.innerWidth;
        
			scrollTimeline.add(gsap.to(gallery, {
					x: () => -totalScroll,
					ease: "none",
					scrollTrigger: {
					id: sectionId,
					trigger: gallery,
					pin: true,
					scrub: 1.2,
						start: "center center",
					end: () => `+=${totalScroll}`,
					onEnter: () => goToSection(gallery, scrollTimeline),
				}
			}))

			ScrollTrigger.refresh();
    }

    const removeAnimation = () => {
			scrollTimeline.kill();
			ScrollTrigger.getById(sectionId).kill();
    }

    const onComplete = after(tracksJSON.length, () => {
			setAllImagesLoaded(true);
    })

    useLayoutEffect(() => {        
			addAnimation();
			return () => {
				removeAnimation();
			}
    }, [allImagesLoaded, sectionRef.current, tracksJSON.length])
  
    return (
			<motion.div ref={sectionRef} id={sectionId} className="artist-profile relative w-fit flex">
				<motion.div className="artist-profile_gallery flex flex-nowrap">
					<AnimatedHeading name={artist.name}/>
					{tracksJSON.length > 0 && tracksJSON.map((image, index) => {
						return (
							<motion.section 
									key={`section-image-${index}`}
								className={classnames("artist-profile_gallery-section flex shrink-0 px-[100px]")}
							>
								<ArtistImage
									className="h-fit inline-flex"
									ratioClass={image.ratio}
									//positionClass={image.position}
									positionClass={"aspect-[9/12] max-w-[400px]"}
									imageData={image} 
									name={artist?.name}
									onComplete={onComplete}
								/>
							</motion.section>
						)
					})}
				</motion.div>
			</motion.div>
    )
}

export default Profile;

interface ArtistImageProps {
	ratioClass?: string | undefined,
	positionClass?: string | undefined,
	name: string | undefined,
	imageData: SpotifyApi.ImageObject | undefined,
	className?: string | undefined,
	onComplete: Function
}

const ArtistImage = ({ ratioClass = "aspect-square max-w-[400px]", positionClass = "", name, imageData, className, onComplete }: ArtistImageProps) => {
	const imageRef = useRef(null);

    return (
			<motion.img
				ref={imageRef}
				src={imageData?.url}
				alt={`${name} cover`}
				onLoad={() => onComplete()}
				onError={() => onComplete()}
				className={classnames("object-cover origin-center backface-visible inline-flex", className, ratioClass, positionClass)}
			/>
    )
}

const AnimatedHeading = ({ name }:{name: string}) => {

	useEffect(() => {
		const children = new SplitType(".artist-name", {
			types: "lines",
			lineClass: "name-line overflow-hidden"
		})

		const parent = new SplitType(".name-line", {
			types: "chars",
			lineClass: "name"
		})

		gsap.fromTo(parent.chars, {
			yPercent: 100,
			opacity: 0
		},{
			yPercent: 0,
			opacity: 1,
			ease: "power3",
			stagger: 0.05,
			delay: 0.4
		})
	}, [])

	return (
		<motion.section 
			className={classnames("artist-profile_name artist-profile_gallery-section z-[1] flex shrink-0 place-content-center items-center mix-blend-difference min-w-[100vw]")}
		>
			<h1 className="artist-name text-[18vw] text-center">{name}</h1>
		</motion.section>
	)
}
