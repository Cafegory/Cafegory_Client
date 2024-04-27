import styled from 'styled-components';

export const ModalContainer = styled.div`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 40%;
height: 12.5rem;
background-color: white;
z-index: 100;
display: flex;
align-items:Center;
justify-content:space-between;
flex-direction: column;
border-radius: 20px;
padding:1rem 0 1rem 0;

@media screen and (max-width: 768px) {
    width:90%;
    height:25rem;
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

export const TitleFont = styled.div`
  width:100%;
  font-size:1.4rem;
  font-weight:550;
  display:flex;
  justify-content:center;
  align-items:center;
`

export const ContentInput = styled.textarea`
  width:80%;
  height:6rem;
  resize: none;
`