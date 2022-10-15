import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router';
import { useDispatch } from 'react-redux';
import Home from './pages/Home/Home';
import Details from './pages/Details/Details';
import Header from './components/Header/Header';
import CategoryPage from './pages/CategoryPage/CategoryPage';
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
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/details" element={<Details />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
      </Routes>
    </>
  );
};

export default App;
