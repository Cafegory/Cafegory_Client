import React from 'react';
import { SidebarContainer } from './Sidebar.style';
import { SidebarButton } from '../SidebarButton/SidebarButton.style';
import { SidebarButtonProps } from '../SidebarButton/SidebarButton.types';
import { SidebarProps } from './Sidebar.types';

const Header: React.FC<SidebarProps> = ({ buttonColors = [] }) => {
  return (
    <SidebarContainer>
      <SidebarButton></SidebarButton>
      <SidebarButton backgroundColor={buttonColors[0] || ''}>
        😀 카페 검색
      </SidebarButton>
      <SidebarButton backgroundColor={buttonColors[1] || ''}>
        ☕ 카공 모임 검색
      </SidebarButton>
      <SidebarButton backgroundColor={buttonColors[2] || ''}>
        📌 마이페이지
      </SidebarButton>
    </SidebarContainer>
  );
};

export default Header;
