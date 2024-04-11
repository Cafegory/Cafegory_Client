import styled from 'styled-components';

export const ContainerStyle = styled.div`
  width:86.9%;
  min-height:100vh
  height:100%;
  margin-left:14%;
  margin-top:7%;
  display:flex;
  flex-direction:column;
  align-items:center;

  @media (max-width: 768px) {
    width:100%;
    margin-left:0%;
    margin-top:0%;
  }
`;
