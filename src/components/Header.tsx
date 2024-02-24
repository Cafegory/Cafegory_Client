import React from 'react';
import Logo from '../image/logo.jpg';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 10%;
  flex-direction: row;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0.5%;
  align-items: center;
`;

const LogoImage = styled.img`
  display: flex;
  border-radius: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 53.61px;
  height: 53.61px;
`;

const LogoFont = styled.div`
  display: flex;
  font-size: 48.2px;
`;

const Header = () => {
  return (
    <div>
      <HeaderContainer>
        <LogoImage src={Logo} alt="로고" />
        <LogoFont>Cafegory.</LogoFont>
      </HeaderContainer>
    </div>
  );
};

export default Header;
