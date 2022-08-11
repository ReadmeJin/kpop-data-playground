import React, { forwardRef, LegacyRef } from 'react'
import { artistsData } from '../api/getArtistData';
import AnimatedTextReveal from '../components/AnimatedTextReveal';
import Counter from '../components/Counter';
import VideoStats from '../components/VideoStats';

interface YoutubeStatsProps {
}
export const YoutubeStats = () => {
    return (
        <div id="youtube-counts-section" className="h-screen my-52 md:my-[40vh]">
            <div className='youtube-subs__container text-center mb-24 md:mb-[10vh]'>
                <h2>
                    <AnimatedTextReveal
                        target='.youtube-subs__title'
                        charClass='youtube-subs__title-char'
                        className='youtube-subs__title font-heading-2 inline-block'
                    >
                        Total Youtube Subscribers
                    </AnimatedTextReveal>
                </h2>

                <Counter
                    className='youtube=subs__count text-[clamp(60px,12vw,12vw)] leading-none'
                    from={100000}
                    to={artistsData.blackpink.total_youtube_subscribers}
                    duration={2}
                />
            </div>
            <div className='youtube-videos__container'>
                <h2>
                    <AnimatedTextReveal
                        target='.youtube-videos__title'
                        charClass='youtube-videos__title-char'
                        className='youtube-videos__title font-heading-2 inline-block'
                    >
                        Most Watched Videos
                    </AnimatedTextReveal>
                </h2>
                <ul className='youtube-videos__list relative flex flex-wrap justify-center w-full h-full px-4'>
                    {artistsData.blackpink.most_watched_videos.map((video, videoIndex) => {
                        return (
                            <li key={`youtube-video-${videoIndex}`} className='youtube-videos__list-item shrink-0 w-full md:w-1/3 xl:w-1/4 2xl:w-1/5 my-4 mx-8'>
                                <VideoStats index={videoIndex} folder={artistsData.blackpink.assets_folder_name} {...video} />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default YoutubeStats;
