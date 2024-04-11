import styled from 'styled-components';

export const CafeSearch = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  height: 25rem;
  gap: 7%;

  @media (max-width: 768px) {
    height: 18rem;
    justify-content: center;
    // display: flex;
    // width: 100%;
    // align-items: center;
    // flex-direction: column;
    // height: 17rem;
    // justify-content: center;
    // gap: 7%;
  }
`;

export const TitleFont = styled.div`
  font-size: 2.3rem;
  font-weight: 550;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    font-weight: 550;
  }
`;

export const SideFont = styled.div`
  font-size: 0.8 rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 32%;
  height: 11%;
  justify-content: space-around;
  background-color: #ffffff;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
    border-radius: 10px;
    border: 1px solid #ccc;
    width: 90%;
    height: 15%;
    justify-content: space-around;
  }
`;

export const InputField = styled.input`
  width: 80%;
  border: none;
  font-size: 1rem;
  height: 80%;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    &::placeholder {
      font-size: 0.8rem;
    }
    border: none;
    &:focus {
      outline: none;
    }
  }
`;

export const PlaceImg = styled.img`
  width: 1.3rem;
  height: 1.3rem;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 1.3rem;
    height: 1.3rem;
    cursor: pointer;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1%;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    gap: 5%;
  }
`;

export const FitterContainer = styled.div`
  height: 32rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 3%;
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    justify-content: space-around;
    height: 36rem;
  }
`;

export const FitterTitle = styled.div`
  font-size: 2.3rem;
  font-weight: 550;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const ChooseOption = styled.div`
  width: 60%;
  height: 70%;
  display: flex;
  flex-direction: column;
  gap: 5%;

  @media (max-width: 768px) {
    width: 90%;
    gap: 5%;
    margin-bottom: 2rem;
    justify-content: space-between;
  }
`;

export const StudyAvailability = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    gap: 3%;
  }
`;

export const ChooseFont = styled.div`
  font-size: 0.9rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const Choose = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 1%;
  align-items: center;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap:3%
}
  }
`;

export const Option = styled.div`
  padding: 1%;
  display: flex;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 0.5rem;
  justify-content: center;
  width: auto;
  height: auto;
  font-weight: bold;
  align-items: center;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover,
  &.selected {
    background-color: rgba(0, 0, 0, 0.2);
  }
  &:active {
    background-color: darkgray;
  }

  @media (max-width: 1024px) {
    font-size: 1rem;
    height: auto;
    width: auto;
    padding: 3%;
    margin-bottom: 1%;
  }
`;

export const SelectContainer = styled.select`
  background-color: rgba(0, 0, 0, 0.05);
  border: none;
  width: 13%;
  height: 70%;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.9rem;
  &:active {
    background-color: darkgray;
  }

  @media (max-width: 1024px) {
    width: 25%;
    font-size: 1rem;
    width: auto;
    height: 2.5rem;
    padding: 0.5%;
  }
`;
