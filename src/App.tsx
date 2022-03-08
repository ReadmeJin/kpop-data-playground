import React from 'react';
import './App.css';
import { Outlet } from '@tanstack/react-location';
import Header from './components/Header';

function App() {

  return (
    <div className="App">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
