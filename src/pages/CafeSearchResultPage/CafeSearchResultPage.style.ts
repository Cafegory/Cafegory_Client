import styled from 'styled-components';

export const MainScreen = styled.div`
  background-color: white;
  min-height: 100vh;
  width: 100%;
  display: flex;
  overflow-y: auto;
`;

export const Container = styled.div`
  width:83.9%;
  height:100%;
  margin-left:16%;
  margin-top:7%;
  display:flex;
  flex-direction:column;
  align-items:center;
`

export const TitleTextContainer = styled.div`
  width:100%;
  height:4rem;
  display:flex;
  justify-content:center;
  border: 0.5px solid transparent; 
  border-bottom-color: lightgray; 
  gap:1%;
`

export const AreaTextFont = styled.div`
  font-size: 2.3rem;
  font-weight: 550;
`

export const ResultTextFont = styled.div`
  font-size: 2.3rem;
  font-weight: 360;
`

export const ResearchContainer = styled.div`
  display:flex;
  height:6rem;
  width:100%;
  justify-content:center;
  align-items:center;
  gap:5%;
`

export const InputContainer = styled.div`
  display: flex;
  border-radius: 6px;
  border: 1px solid #ccc;
  width: 30%;
  height: 50%;
  justify-content: space-around;
  background-color: #ffffff;
  align-items: center;
`;

export const InputField = styled.input`
  width: 80%;
  border: none;
  font-size: 0.7rem;
  height: 80%;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-size: 1rem;
  }
`;

export const PlaceImg = styled.img`
  width: 2.3rem;
  height: 2.3rem;
  cursor: pointer;
`;