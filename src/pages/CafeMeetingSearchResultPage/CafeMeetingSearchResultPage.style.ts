import styled from 'styled-components';

export const TitleTextContainer = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: center;
  border: 0.5px solid transparent;
  border-bottom-color: lightgray;
  gap: 1%;

  @media (max-width: 768px) {
    display: none;
  }
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
  height: 15rem;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 5%;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    height: 10rem;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 32%;
  height: 3rem;
  justify-content: space-around;
  background-color: #ffffff;
  align-items: center;

  @media (max-width: 768px) {
    width: 90%;
    height: 2.5rem;
  }
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

export const FitterContainer = styled.div`
  height: 50rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 3%;
  margin: 5rem;

  @media (max-width: 768px) {
    justify-content: space-between;
    height: 28rem;
    margin: 5rem;
  }
`;

export const FitterTitle = styled.div`
  margin-bottom: 2.5rem;
  font-size: 2.3rem;
  font-weight: 550;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 0rem;
  }
`;

export const ChooseOption = styled.div`
  width: 60%;
  height: 70%;
  display: flex;
  flex-direction: column;
  gap: 5%;

  @media (max-width: 768px) {
    height: 50%;
    width: 90%;
    gap: 15%;
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
    gap: 5%;
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
    gap: 3%;
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

export const CafeList = styled.div`
  width: 80%;
  height: 100%;

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
  }
`;

export const List = styled.div`
  position: relative;
  border: 1px solid rgba(204, 204, 204, 0.5);
  display: flex;
  padding: 1.5%;
  gap: 1.5%;
  border-radius: 0.5rem;
  cursor: pointer;
  margin-bottom: 1.5rem;

  &:active {
    background-color: darkgray;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }

  @media (max-width: 768px) {
    padding: 4%;
    gap: 4%;
    height: auto;
  }
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 8rem;

  @media (max-width: 768px) {
    height: 7rem;
    width: 100%;
  }
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

  @media (max-width: 768px) {
    width: 5rem;
  }
`;

export const DetailModal = styled.img`
  display: none;

  @media (max-width: 768px) {
    display: block;
    height: 1rem;
    width: 1rem;
  }
`;

export const BusinessHoursContainer = styled.div`
  @media (max-width: 768px) {
    display: flex;
    gap: 3%;
    align-items: center;
  }
`;

export const BusinessHourDetailModalContent = styled.div`
  @media (max-width: 768px) {
    position: absolute;
    display: flex;
    top: 70%;
    width: 45%;
    font-size: 0.7rem;
    border: 1px solid rgba(204, 204, 204, 0.5);
    background-color: white;
    padding: 2%;
    border-radius: 0.5rem;
    box-shadow:
      0 2px 4px rgba(0, 0, 0, 0.1),
      0 4px 8px rgba(0, 0, 0, 0.1);
    color: rgba(0, 0, 0, 0.5);
    white-space: pre-line;
    z-index: 100;
  }
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
