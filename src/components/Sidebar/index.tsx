import React from 'react';
import { SidebarContainer } from './Sidebar.style';
import { SidebarButton } from '../SidebarButton/SidebarButton.style';
import { SidebarProps } from './Sidebar.types';
import { useNavigate } from 'react-router-dom';

const Header: React.FC<SidebarProps> = ({ buttonColors = [] }) => {
  const navigate = useNavigate();

  return (
    <SidebarContainer>
      <SidebarButton></SidebarButton>
      <SidebarButton
        backgroundColor={buttonColors[0] || ''}
        onClick={() => {
          navigate('/cafe');
        }}
      >
        😀 카페 검색
      </SidebarButton>
      <SidebarButton
        backgroundColor={buttonColors[1] || ''}
        onClick={() => {
          navigate('/cafeMeetingSearch');
        }}
      >
        ☕ 카공 모임 검색
      </SidebarButton>
      <SidebarButton
        backgroundColor={buttonColors[2] || ''}
        onClick={() => {
          navigate('/my');
        }}
      >
        📌 마이페이지
      </SidebarButton>
    </SidebarContainer>
  );
};

export default Header;
