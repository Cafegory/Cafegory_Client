import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/MainPage/MainPage';
import My from '../pages/MyPage/MyPage';
import CafeSearch from '../pages/CafeSearchPage/CafeSearchPage';
import CafeSearchResultPage from '../pages/CafeSearchResultPage/CafeSearchResultPage';
import CafeCreateRecruitmentPage from '../pages/CafeCreateRecruitmentPage/CafeCreateRecruitmentPage';
import CafeInfo from 'pages/CafeInfoPage/CafeInfoPage';
import CafeMeetingSearchPage from '../pages/CafeMeetingSearchPage/CafeMeetingSearchPage';
import CafeMeetingSearchResultPage from '../pages/CafeMeetingSearchResultPage/CafeMeetingSearchResultPage';
import MyPageEdit from 'pages/MyPageEditPage/MyPageEditPage';
import LoginState from 'pages/Login/LoginState';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/my" element={<My />} />
        <Route path="/cafe" element={<CafeSearch />} />
        <Route path="/cafeSearchResult" element={<CafeSearchResultPage />} />
        <Route
          path="/studyRecruiting"
          element={<CafeCreateRecruitmentPage />}
        />
        <Route path="/cafeInfo" element={<CafeInfo />} />
        <Route path="/cafeMeetingSearch" element={<CafeMeetingSearchPage />} />
        <Route
          path="/cafeMeetingSearchResult"
          element={<CafeMeetingSearchResultPage />}
        />
        <Route path="/mypageEdit" element={<MyPageEdit />} />
        <Route path="/" element={<LoginState />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
