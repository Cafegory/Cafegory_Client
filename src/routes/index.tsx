import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/header" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
