import styled from 'styled-components';

export const MainScreen = styled.div`
  background-color: white;
  min-height: 100vh;
  width: 100%;
  display: flex;
  overflow-y: auto;
`;

export const Container = styled.div`
  width: 83.9%;
  height: 100%;
  margin-left: 16%;
  margin-top: 7%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleTextContainer = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: center;
  border: 0.5px solid transparent;
  border-bottom-color: lightgray;
  gap: 1%;
`;

export const AreaTextFont = styled.div`
  font-size: 2.3rem;
  font-weight: 550;
`;

export const ResultTextFont = styled.div`
  font-size: 2.3rem;
  font-weight: 360;
`;

export const ResearchContainer = styled.div`
  display: flex;
  height: 6rem;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 5%;
`;

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

export const CafeList = styled.div`
  width: 80%;
  height: 100%;
`;

export const List = styled.div`
  position: relative;
  border: 1px solid rgba(204, 204, 204, 0.5);
  display: flex;
  padding: 1.5%;
  gap: 1.5%;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const CafeImg = styled.img`
  width: 100%;
  width: 6.5rem;
  height: 6.5rem;
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 8rem;
`;

export const Name = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
`;
export const Adress = styled.div`
  font-size: 0.85rem;
  opacity: 0.5;
`;

export const BusinessHours = styled.div`
  white-space: pre-line;
  font-size: 1rem;
  font-weight: 650;
`;

export const MinBeveragePrice = styled.div`
  font-size: 0.85rem;
  font-weight: 550;
  border: 1px solid #000000;
  cursor: pointer;
  padding: 1%;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  width: 6rem;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
  &:active {
    background-color: darkgray;
  }
`;

export const IsOpenImg = styled.img`
  position: absolute;
  width: 3rem;
  height: 2rem;
`;
