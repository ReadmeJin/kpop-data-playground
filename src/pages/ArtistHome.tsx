import React, { Fragment, useEffect, useMemo } from 'react';
import { Link, useNavigate } from '@tanstack/react-location';
import useSessionStorage from '../hooks/useSessionStorage';

interface NavItemProps {
  link: string,
  label: string,
  caption?: string
}

export default function ArtistHome() {
  const [artistId, _] = useSessionStorage("artist", "");
  const navigate = useNavigate();
  
  useEffect(() => {
    if(artistId === "/") navigate({to: "/artists"});
  }, [artistId, navigate])

  const navOptions = useMemo(() => ([
    {link: `/artist/${artistId}/profile`, label: 'Profile'},
    {link: `/artist/${artistId}/albums`, label: 'Album', caption: 'sales'},
    {link: `/artist/${artistId}/youtube-counts`, label: 'YouTube', caption: 'viewcount & subscribers'},
    {link: `/artist/${artistId}/spotify-and-itunes`, label: 'Spotify & iTunes', caption: 'plays & listeners'},
    {link: `/artist/${artistId}/social-media`, label: 'Social Media', caption: 'followers & interactions'},
  ]), [artistId]);

  return (
    <Fragment>
      <div className="border-y-[0.5px] dark:border-cream border-black">
        <nav className="mx-44 overflow-x-auto border-x-[0.5px] dark:border-cream border-black">
          <ul className="flex divide-x-[0.5px] dark:divide-cream divide-black">
            {navOptions.map((navItem) => <NavItem key={`nav-${navItem.link}`} item={navItem} />)}
          </ul>
        </nav>
      </div>
    </Fragment>
  )
}

const NavItem = ({ item } : { item: NavItemProps }) => {
  return (
    <Link to={item.link} className="py-4 px-6 flex-1 whitespace-nowrap self-center">
      <li>
          <p className="text-xl">{item.label}</p>
          {item.caption && <small className="text-sm">{item.caption}</small>}
      </li>
    </Link>
  )
}
