import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { MainScreen } from '../MainPage/MainPage.style';

const My: React.FC = () => {
  return (
    <MainScreen>
      <Sidebar buttonColors={[, , 'white']} />
      <Header />
    </MainScreen>
  );
};

export default My;