import styled from 'styled-components';

export const SidebarContainer = styled.div`
  position: fixed;
  background-color: rgba(255, 94, 98, 0.05);
  height: 100vh;
  width: 14%;

  @media (max-width: 768px) {
    display: none;
  }
`;
