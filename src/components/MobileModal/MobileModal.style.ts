import styled from 'styled-components';

export const ModalContainer = styled.div`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 90%;
height: 14rem;
background-color: white;
z-index: 100;
display: flex;
align-items:Center;
flex-direction: column;
border-radius: 20px;

@media screen and (min-width: 760px) {
  display:none;
}
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
`;

export const Header = styled.div`
  width:90%;
  height:15%;
  display:flex;
  justify-content:flex-end;
`

export const CloseButton = styled.div`
  height:100%;
  width:1rem;
  font-size:1.6rem;
  display:flex;
  align-items:center;
  font-weight:100;
`

export const ButtonContainer = styled.div`
  width:70%;
  height:70%;
`

export const Button = styled.div`
  width:100%;
  height:33.3%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  font-size:1.1rem;
  border-bottom: 1px solid lightgray;
`

export const LastButton = styled.div`
  width:100%;
  height:33.3%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  font-size:1.1rem;
`