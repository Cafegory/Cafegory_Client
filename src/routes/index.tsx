import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { HashRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/MainPage/MainPage';
import My from '../pages/MyPage/MyPage';
import CafeSearch from '../pages/CafeSearchPage/CafeSearchPage';
import CafeSearchResultPage from '../pages/CafeSearchResultPage/CafeSearchResultPage';
import CafeCreateRecruitmentPage from '../pages/CafeCreateRecruitmentPage/CafeCreateRecruitmentPage';
import CafeInfo from 'pages/CafeInfoPage/CafeInfoPage';
import CafeMeetingSearchPage from '../pages/CafeMeetingSearchPage/CafeMeetingSearchPage';
import CafeMeetingSearchResultPage from '../pages/CafeMeetingSearchResultPage/CafeMeetingSearchResultPage';
import CafeMeetingInfoPage from '../pages/CafeMeetingInfoPage/CafeMeetingInfoPage';
import Attendance from 'pages/AttendancePage/AttendancePage';
import CafeRecruitmentModify from '../pages/CafeRecruitmentModifyPage/CafeRecruitmentModifyPage';
import WriteReview from '../pages/WriteReviewPage/WriteReviewPage';
import MyPageEdit from 'pages/MyPageEditPage/MyPageEditPage';
import LoginState from 'pages/Login/LoginState';
import TemporaryMain from 'pages/TemporaryMain/TemporaryMain';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/my" element={<My />} />
        <Route path="/cafe" element={<CafeSearch />} />
        <Route
          path="/cafeSearchResult/:page/:area/:canStudy/:startTime?/:endTime?/:minBeveragePrice?/:maxTime?/:sizePerPage?"
          element={<CafeSearchResultPage />}
        />
        <Route
          path="/studyRecruiting/:cafeId"
          element={<CafeCreateRecruitmentPage />}
        />
        <Route path="/cafeInfo/:cafeId" element={<CafeInfo />} />
        <Route path="/cafeMeetingSearch" element={<CafeMeetingSearchPage />} />
        <Route
          path="/cafeMeetingSearchResult/:page/:area/:onlyJoinAble?/:maxMemberCount?/:canTalk?/:sizePerPage?"
          element={<CafeMeetingSearchResultPage />}
        />
        <Route path="/attendance/:studyOnceId" element={<Attendance />} />
        <Route
          path="/cafeMeetingInfo/:studyOnceId"
          element={<CafeMeetingInfoPage />}
        />
        <Route
          path="/studyRecruitingModify/:studyOnceId"
          element={<CafeRecruitmentModify />}
        />
        <Route path="/writeReview/:cafeId" element={<WriteReview />} />
        <Route path="/mypageEdit" element={<MyPageEdit />} />
        <Route path="/oauth" element={<LoginState />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
