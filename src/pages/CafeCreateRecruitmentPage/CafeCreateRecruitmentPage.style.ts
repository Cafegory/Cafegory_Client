import styled from 'styled-components';

import DatePicker from 'react-datepicker';

export const ContainerDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  height: 100%;
  justify-content: space-around;

  @media (max-width: 768px) {
    height: auto;
  }
`;

export const Title = styled.div`
  font-size: 2.4rem;
  font-weight: bold;
  margin-bottom: 4rem;
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 53rem;
  @media (max-width: 768px) {
    height: 40rem;
  }
`;

export const DetailName = styled.div`
  font-size: 1.3rem;
  font-weight: 550;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const GroupName = styled.div``;

export const InputContainer = styled.div`
  width: 17rem;
  display: flex;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 1%;

  @media (max-width: 768px) {
    width: 15rem;
  }
`;

export const InputField = styled.input`
  width: 100%;
  border: none;
  font-size: 1.1rem;
  padding: 2.1%;
  &:focus {
    outline: none;
  }
  background-color: transparent;
`;

export const EditImg = styled.img`
  width: 2rem;
  height: 2rem;
`;

export const Location = styled.div``;

export const CafeInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1%;
`;

export const CafeName = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
`;

export const Date = styled.div``;

export const DateContatiner = styled.div`
  background-color: rgba(0, 0, 0, 0.05);
  width: 17rem;
  display: flex;
  align-items: center;
  padding: 1%;
  border-radius: 10px;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 15rem;
  }
`;

export const CustomDatePicker = styled(DatePicker)`
  width: 100%;
  border: none;
  &:focus {
    outline: none;
  }
  background-color: transparent;
  font-size: 1.1rem;
  caret-color: transparent;
  cursor: pointer;
`;

export const DateImg = styled.img`
  width: 2rem;
  height: 2rem;
`;

export const Time = styled.div``;

export const Choose = styled.div`
  display: flex;

  gap: 1%;
  align-items: center;
`;

export const SelectContainer = styled.select`
  background-color: rgba(0, 0, 0, 0.05);
  border: none;
  width: 6rem;
  border-radius: 10px;
  font-weight: bold;
  font-size: 1.1rem;
  padding: 1%;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 3%;
  }
`;

export const Maximum = styled.div``;

export const MaximumInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1%;
`;

export const MaximumInput = styled.input`
  width: 2.5rem;
  border: none;
  &:focus {
    outline: none;
  }
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  padding: 1%;
  font-size: 1.1rem;

  @media (max-width: 768px) {
    padding: 3%;
  }
`;

export const CanTalk = styled.div``;

export const CanTalkButtonContainer = styled.div`
  display: flex;
  gap: 1%;
`;

export const CanTalkButton = styled.div`
  background-color: rgba(0, 0, 0, 0.05);
  width: 3rem;
  padding: 1%;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  font-size: 1.1rem;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
  &.selected {
    background-color: rgba(0, 0, 0, 0.5);
  }
  &:active {
    background-color: darkgray;
  }

  @media (max-width: 768px) {
    padding: 2.5%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 10rem;
  justify-content: space-around;
  padding: 4%;
  @media (max-width: 768px) {
    padding: 0%;
    height: 8rem;
  }
`;

export const Warning = styled.span`
  color: red;
  font-size: 0.9rem;
`;

export const OpenKakao = styled.div``;
