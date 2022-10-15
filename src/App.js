import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router';
import { useDispatch } from 'react-redux';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import { TicketThunk } from './redux/ticketSlice';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(TicketThunk());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
      </Routes>
    </>
  );
};

export default App;
