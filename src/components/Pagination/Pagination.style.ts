import styled from 'styled-components';

export const PageContainer = styled.div`
  width:100%;
  height:2rem;
  display:flex;
  justify-content:center;
  align-items:center;
  gap:0.5rem;
`;

export const PageButton = styled.div`
  width:2rem;
  height:2rem;
  border-radius:50%;
  cursor:pointer;
  display:flex;
  justify-content:center;
  align-items:center;

  &:hover {
    background-color: lightgray;
  }
  &:active {
    background-color: gray;
  }
`

export const CurrentPageButton = styled.div`
  width:2rem;
  height:2rem;
  border-radius:50%;
  background-color:lightgray;
  display:flex;
  justify-content:center;
  align-items:center;
`
