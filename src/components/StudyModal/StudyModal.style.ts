import styled from 'styled-components';

export const StudyModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  height: 31%;
  background-color: white;
  z-index: 100;
  display:flex;
  justify-content:center;
  flex-direction: column;
  border-radius:20px;
  gap:1rem;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;