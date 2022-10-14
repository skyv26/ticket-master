import React from 'react';
import { Routes, Route, Navigate } from 'react-router';
import Home from './pages/Home/Home';

const App = () => (
  <>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Navigate replace to="/home" />} />
    </Routes>
  </>
);

export default App;
