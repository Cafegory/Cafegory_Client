import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { MainScreen } from './CafeSearchResultPage.style';

const CafeSearchResult: React.FC = () => {
  return (
    <MainScreen>
      <Sidebar buttonColors={['white', ,]} />
      <Header />
    </MainScreen>
  );
};

export default CafeSearchResult;
