import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { MainScreen } from './MainPage.style';

const Main: React.FC = () => {
  return (
    <MainScreen>
      <Sidebar buttonColors={['white', ,]} />
      <Header />
    </MainScreen>
  );
};

export default Main;
