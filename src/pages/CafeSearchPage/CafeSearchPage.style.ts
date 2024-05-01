import styled from 'styled-components';

export const CafeSearch = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  height: 32rem;
  gap: 7%;

  @media (max-width: 768px) {
    height: 15rem;
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
    width: 90%;
    height: 15%;
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

  @media (max-width: 768px) {
    gap: 5%;
  }
`;

export const FitterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  height: 50rem;

  @media (max-width: 768px) {
    justify-content: space-around;
    height: 50rem;
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
  display: flex;
  flex-direction: column;
  height: 50%;
  justify-content: space-around;

  @media (max-width: 768px) {
    width: 90%;
    gap: 7%;
    margin-bottom: 2rem;
    justify-content: center;
  }
`;

export const StudyAvailability = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    gap: 10%;
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
  flex-wrap: wrap;
  gap: 1%;
  align-items: center;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 3%;
  }
`;

export const Option = styled.div`
  padding: 2%;
  width: auto;
  height: 1rem;
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  margin-top: 0.1rem;

  @media (max-width: 1024px) {
    font-size: 1rem;
    padding: 3%;
    margin-bottom: 1%;
  }
`;

export const SelectContainer = styled.select`
  background-color: rgba(0, 0, 0, 0.05);
  border: none;
  border-radius: 0.5rem;
  padding: 2%;
  font-size: 0.9rem;
  font-weight: bold;
  @media (max-width: 1024px) {
    width: 25%;
    font-size: 1rem;
    width: auto;
    height: 2.5rem;
    padding: 0.5%;
  }
`;
