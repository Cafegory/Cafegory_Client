import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/MainPage/MainPage';
import My from '../pages/MyPage/MyPage';
import CafeSearch from '../pages/CafeSearchPage/CafeSearchPage';
import StudySearch from '../pages/StudySearchPage/StudySearchPage';
import CafeSearchResult from '../pages/CafeSearchResultPage/CafeSearchResultPage';
import CafeCreateRecruitment from '../pages/CafeCreateRecruitment/CafeCreateRecruitment';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/my" element={<My />} />
        <Route path="/cafe" element={<CafeSearch />} />
        <Route path="/cafeSearchResult" element={<CafeSearchResult />} />
        <Route path="/study" element={<StudySearch />} />
        <Route path="/studyRecruiting" element={<CafeCreateRecruitment />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
