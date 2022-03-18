import React from 'react';
import './App.css';
import { Outlet } from '@tanstack/react-location';
import Header from './components/Header';
import ArtistProvider from './providers/ArtistProvider';
import SpotifyTokenProvider from './providers/SpotifyTokenProvider';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {

  return (
    <SpotifyTokenProvider>
      <ArtistProvider>
        <div className="App">
          <Header />
          <main className="w-screen">
            <Outlet />
          </main>
        </div>
      </ArtistProvider>
    </SpotifyTokenProvider>
  );
}

export default App;
