import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { SidebarContainer } from 'components/Sidebar/Sidebar.style';

const Main: React.FC = () => {
  return (
    <div>
      <Sidebar />
      <Header />
    </div>
  );
};

export default Main;
