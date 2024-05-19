import styled from 'styled-components';

export const DeleteModal = styled.div`
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
  gap: 1rem;

  @media screen and (max-width: 768px) {
    width:90%;
  }
`;

export const CommentFont = styled.div`
  width:100%;
  height:15%;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:1.3rem;
`

export const ButtonContainer = styled.div`
  width:100%;
  height:15%;
  gap:1rem;
  display:flex;
  justify-content:center;
  align-items:center;
`