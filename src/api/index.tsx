export const fetchSpotifyAccessToken = async () => {
  const tokenBuffer = btoa(process.env.REACT_APP_SPOTIFY_CLIENT_ID + ':' + process.env.REACT_APP_SPOTIFY_SECRET_KEY);
  const urlencoded = new URLSearchParams();
  urlencoded.append("grant_type", "client_credentials");

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      'Authorization': `Basic ${tokenBuffer}`,
    },
    body: urlencoded
  })
  return await response.json();
}
