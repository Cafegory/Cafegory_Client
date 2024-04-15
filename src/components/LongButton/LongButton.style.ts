import styled from 'styled-components';

export const ButtonStyle = styled.div`
  height: 60px;
  width: 100%;
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
  cursor: pointer;
  transition: opacity 0.3s;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      opacity: 0.8;
    }
  }

  @media (max-width: 768px) {
    height: 50px;
    width: 100%;
  }
`;
export const Font = styled.div`
  font-size: 1.6rem;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;
