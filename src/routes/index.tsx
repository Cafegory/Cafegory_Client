import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/MainPage/MainPage';
import My from '../pages/MyPage/MyPage';
import CafeSearch from '../pages/CafeSearchPage/CafeSearchPage';
import CafeSearchResult from '../pages/CafeSearchResultPage/CafeSearchResultPage';
import CafeCreateRecruitment from '../pages/CafeCreateRecruitment/CafeCreateRecruitment';
import CafeMeetingSearchPage from '../pages/CafeMeetingSearchPage/CafeMeetingSearchPage';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/my" element={<My />} />
        <Route path="/cafe" element={<CafeSearch />} />
        <Route path="/cafeSearchResult" element={<CafeSearchResult />} />
        <Route path="/studyRecruiting" element={<CafeCreateRecruitment />} />
        <Route path="/cafeMeetingSearch" element={<CafeMeetingSearchPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
