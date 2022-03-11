import React from 'react';
import './App.css';
import { Outlet } from '@tanstack/react-location';
import Header from './components/Header';
import ArtistProvider from './providers/ArtistProvider';
import SpotifyTokenProvider from './providers/SpotifyTokenProvider';

function App() {

  return (
    <SpotifyTokenProvider>
      <ArtistProvider>
        <div className="App">
          <Header />
          <main className="overflow-x-hidden w-screen">
            <Outlet />
          </main>
        </div>
      </ArtistProvider>
    </SpotifyTokenProvider>
  );
}

export default App;
