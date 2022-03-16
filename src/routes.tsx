import React from 'react';
import { Route } from '@tanstack/react-location';
import { Home, Search, ArtistHome } from './pages';


export const routes: Route[] = [
    { path: "/", element: <Home /> },
    { path: "artists", element: <Search/> },
    { path: "artist", children: [
        { 
            path: ":artistName", 
            children: [
                {
                    path: ":artistId",
                    element: <ArtistHome />
                }
            ]
        }
    ]}
]
