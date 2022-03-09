import { Link } from '@tanstack/react-location'
import React, { useLayoutEffect } from 'react'
import { useArtist } from '../providers/ArtistProvider';

export default function Search() {
    const { setArtist } = useArtist();
    
    useLayoutEffect(() => {
        setArtist("")
    }, [])

    return (
        <div>
            <Link to="/artist/iu" onClick={() => setArtist('iu')}>
                Artist: IU
            </Link>
        </div>
    )
}
