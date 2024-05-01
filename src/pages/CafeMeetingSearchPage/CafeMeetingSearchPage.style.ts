import styled from 'styled-components';

export const CafeSearch = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  height: 25rem;
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
  }
`;

export const InputContainer = styled.div`
  display: flex;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 32%;
  height: 11%;
  background-color: #ffffff;
  align-items: center;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    width: 90%;
    height: 15%;
    justify-content: space-around;
  }
`;

export const InputField = styled.input`
  width: 95%;
  border: none;
  font-size: 1rem;
  height: 80%;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-size: 1rem;
  }
  display: flex;

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
  height: 32rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 3%;
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    height: 28rem;
    gap: 5%;
    justify-content: space-around;
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
  height: 50%;
  display: flex;
  flex-direction: column;
  gap: 5%;

  @media (max-width: 768px) {
    width: 90%;
    gap: 20%;
    margin-bottom: 2rem;
    justify-content: center;
    height: 37%;
    align-items: center;
  }
`;

export const StudyAvailability = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    gap: 15%;
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
  display: flex;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 0.5rem;
  justify-content: center;
  width: auto;
  height: 1rem;
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
  margin-bottom: 0.5rem;
  margin-top: 0.1rem;

  @media (max-width: 1024px) {
    font-size: 1rem;
    padding: 3%;
    margin-bottom: 1%;
  }
`;

export const MaximumInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1%;
  width: 100%;
  height: 100%;
`;

export const MaximumInput = styled.input`
  width: 5%;
  height: 40%;
  border: none;
  &:focus {
    outline: none;
  }
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  padding: 1%;
  font-size: 1.1rem;

  @media (max-width: 1024px) {
    font-size: 1rem;
    height: auto;
    width: auto;
    padding: 3%;
  }
`;

export const Warning = styled.span`
  color: red;
  font-size: 0.9rem;
`;
