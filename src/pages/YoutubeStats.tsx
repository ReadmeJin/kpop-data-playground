import React, { forwardRef, LegacyRef } from 'react'
import { BsChevronDown } from 'react-icons/bs';
import { artistsData } from '../api/getArtistData';
import AnimatedTextReveal from '../components/AnimatedTextReveal';
import Counter from '../components/Counter';
import LineGraph from '../components/LineGraph';
import VideoStats from '../components/VideoStats';

interface YoutubeStatsProps {
}
export const YoutubeStats = () => {
    const numberWithCommas = (x: number) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return (
        <div id="youtube-counts-section" className="pt-52 md:pt-[40vh]">
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
            <div className='youtube-stats__container flex px-[5vw] py-[30vh] space-x-40'>
                <aside className='flex-1 md:flex-none px-4'>
                    <div className='grid grid-cols-2 gap-10 mb-16'>
                        <button className='btn-radio'>Subs</button>
                        <button className='btn-radio--outline'>views</button>
                    </div>
                    <button className='relative w-full flex items-center changing-border rounded-md overflow-hidden h-10 mb-8'>
                        <BsChevronDown size={22} className='absolute right-0 top-0 bottom-0 self-center h-full mx-2' />
                        <span className='px-7 w-full inline-flex select-none'>All-time</span>
                    </button>
                    <div className='flex changing-border rounded-md divide-x overflow-hidden mb-16'>
                        <button className='inline-flex flex-1 justify-center py-1 px-3 select-none'>Year</button>
                        <button className='inline-flex flex-1 justify-center py-1 px-3 select-none'>Month</button>
                        <button className='inline-flex flex-1 justify-center py-1 px-3 select-none'>Day</button>
                    </div>
                    <div className='space-y-8'>
                        <div className='grid text-left space-y-2 changing-border px-4 py-3 rounded-md'>
                            <label className='text-md tracking-wider'>Published</label>
                            <span className='text-xl tracking-wide'>{new Date().toLocaleDateString()}</span>
                        </div>
                        <div className='grid text-left space-y-2 changing-border px-4 py-3 rounded-md'>
                            <label className='text-md tracking-wider'>Total</label>
                            <span className='text-xl tracking-wide'>{numberWithCommas(artistsData.blackpink.total_youtube_subscribers)}</span>
                        </div>
                        <div className='grid text-left space-y-2 changing-border px-4 py-3 rounded-md'>
                            <label className='text-md tracking-wider'>New today</label>
                            <span className='text-xl tracking-wide'>{numberWithCommas(artistsData.blackpink.total_youtube_subscribers)}</span>
                        </div>
                    </div>
                </aside>
                <div className='graph-line_wrapper min-h-[60vh] h-0 flex-1 w-full flex hidden'>
                    <LineGraph />
                </div >
            </div>
        </div>
    )
}

export default YoutubeStats;
