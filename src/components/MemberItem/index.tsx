import Counter from '../Counter'
import { useSwiperSlide } from 'swiper/react';
import cn from 'classnames';

type Props = {
    folder: string,
    thumbnail: string,
    hashtag: string,
    total_followers: number
}

export default function MemberItem({ folder, thumbnail, hashtag, total_followers }: Props) {
    const swiperSlide = useSwiperSlide();

    return (
        <div className={cn('grid gap-2 text-center transition-opacity ease-linear', {
            "opacity-30 grayscale": swiperSlide.isPrev,
            "opacity-60 grayscale": !swiperSlide.isPrev && !swiperSlide.isNext && !swiperSlide.isActive,
            "opacity-70 grayscale": swiperSlide.isNext,
            "opacity-100": swiperSlide.isActive && !swiperSlide.isDuplicate
        })}>
            <figure className='grid h-fit gap-4'>
                <img className='rounded-full aspect-square object-cover w-full' src={require(`../../assets/${folder}/${thumbnail}`)} alt="" />
                <figcaption className='font-[clamp(12px,2vw,16px)]'>{hashtag}</figcaption>
            </figure>
            <Counter
                className='social-media-member__followers text-[clamp(22px,2vw,26px)] mb-4'
                from={100000}
                to={total_followers}
                duration={2}
            />
        </div>
    )
}