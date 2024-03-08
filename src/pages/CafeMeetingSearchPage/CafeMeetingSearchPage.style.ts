import styled from 'styled-components';

export const CafeSearch = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  height: 25rem;
  gap: 7%;
`;

export const TitleFont = styled.div`
  font-size: 2.3rem;
  font-weight: 550;
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
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1%;
`;

export const FitterContainer = styled.div`
  height: 32rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 3%;
  margin-bottom: 5rem;
`;

export const FitterTitle = styled.div`
  margin-bottom: 2.5rem;
  font-size: 2.3rem;
  font-weight: 550;
`;

export const ChooseOption = styled.div`
  width: 60%;
  height: 70%;
  display: flex;
  flex-direction: column;
  gap: 5%;
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
  height: 70%;
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
`;

// export const SelectContainer = styled.select`
//   background-color: rgba(0, 0, 0, 0.2);
//   border: none;
//   width: 13%;
//   height: 70%;
//   border-radius: 0.5rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-weight: bold;
//   font-size: 0.9rem;
//   &:active {
//     background-color: darkgray;
//   }
// `;

export const MaximumInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1%;
  width: 100%;
  height: 100%;
`;

export const MaximumInput = styled.input`
  width: 3%;
  height: 40%;
  border: none;
  &:focus {
    outline: none;
  }
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  padding: 1%;
  font-size: 1.1rem;
`;
