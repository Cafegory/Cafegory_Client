import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { MainScreen } from '../CafeSearchPage/CafeSearchPage.style';

const My: React.FC = () => {
  return (
    <MainScreen>
      <Sidebar buttonColors={[, , 'white']} />
      <Header />
    </MainScreen>
  );
};

export default My;
