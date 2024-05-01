import styled from 'styled-components';

export const Close = styled.div`
  cursor: pointer;
  margin-left: auto;
  font-size: 2rem;
`;

export const CafeSearchModalContainer = styled.div`
  position: fixed;
  width: 70%;
  background-color: white;
  height: 80%;
  display: flex;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  flex-direction: column;
  z-index: 9999;
  align-items: center;
  gap: 30%;
  left: 50%;
  top: 50%;
  transform: translate(-40%, -50%);
  overflow-y: auto;
  padding: 2%;
`;

export const ResearchContainer = styled.div`
  display: flex;
  height: 10%;
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
  height: 80%;
  justify-content: space-around;
  background-color: #ffffff;
  align-items: center;

  @media (max-width: 768px) {
    width: 90%;
    height: 2.5rem;
  }
`;

export const InputField = styled.input`
  width: 85%;
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
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  height: auto;
  justify-content: space-around;

  @media (max-width: 768px) {
    justify-content: space-around;
    height: 50rem;
  }
`;

export const FitterTitle = styled.div`
  margin-bottom: 2.5rem;
  font-size: 2.3rem;
  font-weight: 550;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ChooseOption = styled.div`
  display: flex;
  flex-direction: column;
  height: 70%;
  gap: 3%;
  // justify-content: space-around;
  margin-bottom: 3rem;
  @media (max-width: 768px) {
    height: 100%;
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
  height: 1%;
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 0.5rem;

  @media (max-width: 1024px) {
    font-size: 1rem;
    padding: 3%;
    margin-bottom: 1%;
  }
`;
export const CafeList = styled.div`
  width: 80%;
  // height: 100%;
  height: 30%;

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
  // height: 8rem;
  height: 8%;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
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
`;

export const IsOpenImg = styled.img`
  width: 3rem;
  height: 2rem;
  margin-left: auto;
`;

export const SelectContainer = styled.select`
  background-color: rgba(0, 0, 0, 0.05);
  border: none;
  border-radius: 0.5rem;
  padding: 1%;
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

export const DetailModal = styled.img`
  display: none;
  @media (max-width: 1024px) {
    display: block;
    height: 1rem;
    width: 1rem;
  }
`;

export const AdressContainer = styled.div`
  @media (max-width: 768px) {
    display: flex;
    gap: 3%;
    align-items: center;
  }
`;

export const AdressDetailModalContent = styled.div`
  @media (max-width: 768px) {
    position: absolute;
    display: flex;
    top: 50%;
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
