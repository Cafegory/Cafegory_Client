//MainPage.style.ts
import styled from 'styled-components';

export const MainScreen = styled.div`
  background-color: white;
  min-height: 100vh;
  width: 100%;
  display: flex;
  overflow-y: auto;
`;

export const SearchContainer = styled.div`
  width: 84%;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const CafeSearch = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 48%;
  justify-content: center;
  gap: 5%;
`;

export const TitleFont = styled.div`
  font-size: 2.3rem;
  font-weight: 550;
`;

export const SideFont = styled.div`
  font-size: 0.8 rem;
`;

export const InputContainer = styled.div`
  display: flex;
  border-radius: 6px;
  border: 1px solid #ccc;
  width: 32%;
  height: 10%;
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
  width: 1.3rem;
  height: 1.3rem;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1%;
`;

export const FitterContainer = styled.div`
  height: 52%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 3%;
`;

export const FitterTitle = styled.div`
  font-size: 2.3rem;
  font-weight: 550;
`;

export const ChooseOption = styled.div`
  width: 60%;
  height: 70%;
  display: flex;
  flex-direction: column;
  gap: 4%;
`;

export const StudyAvailability = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ChooseFont = styled.div`
  font-size: 0.9rem;
  font-weight: bold;
`;

export const Choose = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 1%;
  align-items: center;
`;

export const Option = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 0.5rem;
  justify-content: center;
  width: 13%;
  height: 80%;
  font-weight: bold;
  align-items: center;
  font-size: 0.9rem;
  cursor: pointer;
`;

export const startTime = '';

export const endTime = '';

export const SelectContainer = styled.select`
  background-color: rgba(0, 0, 0, 0.05);
  border: none;
  width: 13%;
  height: 80%;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.9rem;
  padding: 1.5%;
`;
