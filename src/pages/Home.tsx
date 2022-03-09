import React, { useLayoutEffect } from 'react';
import useSessionStorage from '../hooks/useSessionStorage';
import { useArtist } from '../providers/ArtistProvider';

export default function Home() {
    const { setArtist } = useArtist();

    useLayoutEffect(() => {
        setArtist("")
    }, [])

    return (
        <div>
            
        </div>
    )
}
