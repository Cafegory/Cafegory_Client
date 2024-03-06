import styled from 'styled-components';
import DatePicker from 'react-datepicker';

export const ContainerDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  height: 100%;
  justify-content: space-around;
`;

export const Title = styled.div`
  font-size: 2.4rem;
  font-weight: bold;
  margin-bottom: 4rem;
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 53rem;
`;

export const DetailName = styled.div`
  font-size: 1.3rem;
  font-weight: 550;
  margin-bottom: 0.5rem;
`;

export const Profile = styled.div``;

export const PhotoContaioner = styled.div`
  display: flex;
  gap: 1%;
  align-items: center;
`;

export const Photo = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
`;

export const EditGuideMessage = styled.div`
  font-size: 1.3rem;
`;

export const GroupName = styled.div``;

export const InputContainer = styled.div`
  width: 17rem;
  display: flex;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 1%;
`;

export const InputField = styled.input`
  width: 100%;
  border: none;
  font-size: 1.1rem;
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
export const CafeImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;
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
`;

export const Maximum = styled.div``;

export const MaximumInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1%;
`;

export const MaximumInput = styled.input`
  width: 1.5rem;
  border: none;
  &:focus {
    outline: none;
  }
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  padding: 1%;
  font-size: 1.1rem;
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
  &:hover,
  &.selected {
    background-color: rgba(0, 0, 0, 0.2);
  }
  &:active {
    background-color: darkgray;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 10rem;
  justify-content: space-around;
  padding: 4%;
`;
