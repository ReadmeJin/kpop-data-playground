import { Link } from '@tanstack/react-location'
import React, { useLayoutEffect, useState } from 'react'
import { useSpotifySearch } from '../hooks/useSpotify';
import { useArtist } from '../providers/ArtistProvider'

export default function Search() {
    const { setArtist } = useArtist();
    const { data, isSuccess } = useSpotifySearch('genre:k-pop');
    const [searchQuery, setSearchQuery] = useState('');

    const onSearchArtist = (event: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(event.target.value); 
    
    const handleSortByName = (artistA: any, artistB: any) => {
        const nameA = artistA.name.toUpperCase();
        const nameB = artistB.name.toUpperCase();
        if (nameA === nameB) return 0; 
        return nameA > nameB ? 1 : -1;
    }

    useLayoutEffect(() => {
        setArtist("")
    }, [data])

    return (
        <div className="px-8 py-16">
            <div className="relative mb-6 text-center space-y-4 mx-40">
                <label htmlFor="artist-search" className="text-4xl">Find your favourite KPOP groups & artists</label>
                <div className="before:absolute before:w-full before:scale-x-0 hover:before:scale-x-100 before:origin-center before:h-[1px] before:bg-dark dark:before:bg-cream before:z-[1] before:left-0 before:bottom-0 before:transition-transform">
                    <input
                        id="artist-search"
                        type="text"
                        placeholder="Type here"
                        className="w-full py-4 text-2xl font-light placeholder:text-center focus:outline-none bg-transparent border-b-[0.5px] border-black dark:border-cream text-center"
                        value={searchQuery}
                        onChange={onSearchArtist}
                    />
                </div>
            </div>
            <section className="artist-list px-40 flex flex-wrap">
                {data?.artists.items.filter(artist => artist.genres.includes('k-pop')).sort(handleSortByName).map((artist) => (
                    <div key={artist.id} id={artist.id} className="flex-1 p-4 whitespace-nowrap">{artist.name}</div>
                ))}
            </section>
        </div>
    )
}
