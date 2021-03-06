import React from 'react';

import './App.css';

import { AboutMe } from './components/AboutMe';
import { CenterImage } from './components/CenterImage';
import { Footer } from './components/Footer';
import { NavBar } from './components/NavBar';
import { PaintList } from './components/PaintList';

function App() {
  return (
    <>
      <NavBar />
      <CenterImage />
      <AboutMe />
      <PaintList />
      <Footer />
    </>
  );
}

export default App;