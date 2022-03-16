import { useQuery } from "react-query";
import { useSpotifyToken } from "../providers/SpotifyTokenProvider";

export function useSpotifySearch(query: string, params?: SpotifyApi.SearchForItemParameterObject) {
  const { spotifyApi, spotifyToken } = useSpotifyToken();
  const searchKpopArtists = async () => await spotifyApi.searchArtists(query, params);
  const data = useQuery(["spotify_search", query], searchKpopArtists, { 
    enabled: !!spotifyToken.access_token,
  });
  return data;
}

export function useSpotifyArtist(artistId: string, params?: SpotifyApi.SearchForItemParameterObject) {
  const { spotifyApi, spotifyToken, setSpotifyToken } = useSpotifyToken();
  const getKpopArtist = async () => await spotifyApi.getArtist(artistId, params);
  const data = useQuery(["spotify_search", artistId], getKpopArtist, { 
    enabled: !!spotifyToken.access_token,
    onError: (err: XMLHttpRequest) => {
      const { error }:{error: SpotifyApi.ErrorObject} = JSON.parse(err.response);
      if(error.status === 401) setSpotifyToken({});
    }
  });
  return data;
}
