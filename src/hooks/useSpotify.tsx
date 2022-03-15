import { useQuery } from "react-query";
import { useSpotifyToken } from "../providers/SpotifyTokenProvider";

export function useSpotifySearch(query: string, params?: SpotifyApi.SearchForItemParameterObject) {
  const { spotifyApi, spotifyToken } = useSpotifyToken();
  const getKpopArtist = async () => await spotifyApi.searchArtists(query, params);
  const data = useQuery(["spotify_search", query], getKpopArtist, { 
    enabled: !!spotifyToken.access_token,
  });
  return data;
}
