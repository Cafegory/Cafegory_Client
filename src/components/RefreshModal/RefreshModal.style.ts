import styled from 'styled-components';

export const RefreshModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  height: 31%;
  background-color: white;
  z-index: 100;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 20px;
  gap: 0.7rem;

  @media screen and (max-width: 768px) {
    width:90%;
  }
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const MessageFont = styled.div`
  width:100%;
  font-size:1.1rem;
  display:flex;
  justify-content:center;
  color:red;
`

export const QuestionFont = styled.div`
  width:100%;
  font-size:1.3rem;
  display:flex;
  justify-content:center;
  font-weight:440;
`

export const ButtonContainer = styled.div`
  display:flex;
  justify-content:center;
  gap:1rem;
  width:100%;
`