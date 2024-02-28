//Button.style.ts
import styled from 'styled-components';

export const ButtonContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonStyle = styled.div`
  height: 6%;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.9rem;
  background-color: ${(props) => {
    switch (props.color) {
      case 'black':
        return '#000000';
      case 'gray':
        return '#AAAAAA';
      case 'red':
        return '#FA2C2C';
      default:
        return '#000000';
    }
  }};
`;
export const Font = styled.div`
  font-size: 1.6rem;
  color: #ffffff;
`;
