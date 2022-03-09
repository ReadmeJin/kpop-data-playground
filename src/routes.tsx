import React from 'react';
import { Route } from '@tanstack/react-location';
import { Home, Profile, Search, ArtistHome, Album, YoutubeStats, StreamStats, SocialMedia } from './pages';


export const routes: Route[] = [
    { path: "/", element: <Home /> },
    { path: "list", element: <Search/> },
    { 
        path: "artist", 
        element: <ArtistHome />,
        children: [
            { path: ":artistId", children: [
                {path: "/", element: <Profile />},
                {path: "profile", element: <Profile />},
                {path: "albums", element: <Album />},
                {path: "youtube-counts", element: <YoutubeStats />},
                {path: "spotify-and-itunes", element: <StreamStats />},
                {path: "social-media", element: <SocialMedia />},
            ] },
        ]
    }
]
