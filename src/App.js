import React from 'react';
import { Routes, Route, Navigate } from 'react-router';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';

const App = () => (
  <>
    <Header />
    <Slider />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Navigate replace to="/home" />} />
    </Routes>
  </>
);

export default App;
