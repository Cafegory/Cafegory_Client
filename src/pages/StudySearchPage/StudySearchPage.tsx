import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { MainScreen } from '../MainPage/MainPage.style';

const StudySearch: React.FC = () => {
  return (
    <MainScreen>
      <Sidebar buttonColors={[, 'white']} />
      <Header />
    </MainScreen>
  );
};

export default StudySearch;
