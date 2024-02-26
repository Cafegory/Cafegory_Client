import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';

const PageRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/header" element={<Header />} />
      </Routes>
    </Router>
  );
};

export default PageRoutes;
