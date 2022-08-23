import { Route } from '@tanstack/react-location';
import { Home, Search, ArtistHome, ArtistMenu } from './pages';


export const routes: Route[] = [
    { path: "/", element: <Home /> },
    { path: "artists", element: <Search /> },
    { path: "artists-alt", element: <ArtistMenu /> },
    {
        path: "artist", children: [
            {
                path: ":artistName",
                children: [
                    {
                        path: ":artistId",
                        element: <ArtistHome />
                    }
                ]
            }
        ]
    }
]
