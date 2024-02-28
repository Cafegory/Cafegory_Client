import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Login from '../../components/Login';
import { MainScreen } from './MainPage.style';

const Main: React.FC = () => {
  return (
    <MainScreen>
      <Sidebar buttonColors={['white', ,]} />
      <Header />
      <Login />
    </MainScreen>
  );
};

export default Main;
