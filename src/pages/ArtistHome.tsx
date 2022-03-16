import React, { useEffect } from 'react';
import { Link, useMatch, useNavigate } from '@tanstack/react-location';
import useSessionStorage from '../hooks/useSessionStorage';
import ArtistSubMenu from '../components/ArtistSubMenu';
import Profile from './Profile';
import { useSpotifyArtist } from '../hooks/useSpotify';
import ScrollSpy from "react-ui-scrollspy";

export default function ArtistHome() {
  const [artistId, _] = useSessionStorage("artist", "");
  const navigate = useNavigate();
  const { params: { artistId: artistGUID } } = useMatch();

  const { data } = useSpotifyArtist(artistGUID);
  console.log(data);
  
  useEffect(() => {
    if(artistId === "/") navigate({to: "/artists"});
  }, [artistId, navigate])

  return (
    <div id="artistPage">
      <ArtistSubMenu artistId={artistId}/>
      <div className="mt-20 px-16 2xl:px-20">
        <ScrollSpy activeClass="invert">
          <Profile artist={data}/>
        </ScrollSpy>
      </div>
    </div>
  )
}
