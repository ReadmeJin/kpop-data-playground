import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import { artistsData } from '../api/getArtistData'
import Counter from '../components/Counter'
import MemberItem from '../components/MemberItem';
import 'swiper/css';
import "swiper/css/free-mode";

export default function SocialMedia() {

    return (
        <section id="social-media-section" className="py-10vh md:py-[20vh]">
            <div className='mb-3 xl:mb-20 text-left'>
                <h3 className='social-media-hashtag__count font-heading-2'>Instagram: <strong className='font-bold'><a href="#" target="_blank" rel="noopener noreferrer">{artistsData.blackpink.instagram.hashtag}</a></strong></h3>
                <Counter
                    className='social-media-followers__count text-[clamp(22px,12vw,200px)] leading-none'
                    from={100000}
                    to={artistsData.blackpink.total_spotify_followers}
                    duration={2}
                />
            </div>
            <div className='social-media__members text-left'>
                <h3 className='social-media-hashtag__count font-heading-2 mb-5 lg:mb-10'>Members Instagram:</h3>
                <Swiper
                    className='members-carousel max-w-[768px] inline-block'
                    slidesPerView="auto"
                    loop={true}
                    freeMode={true}
                    modules={[FreeMode]}
                >
                    {artistsData.blackpink.instagram.members_instagram.map((member, memberIndex) => {
                        return (
                            <SwiperSlide
                                key={`members-${memberIndex}`}
                                className='shrink-0 h-full max-w-[150px] sm:w-[250px] xl:w-[300px] mr-5 md:mr-8 xl:mr-24'
                            >
                                <MemberItem
                                    folder={artistsData.blackpink.assets_folder_name}
                                    thumbnail={member.account_thumbnail}
                                    hashtag={member.hashtag}
                                    total_followers={member.total_followers}
                                />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>
    )
}
