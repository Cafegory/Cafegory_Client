import styled from 'styled-components';

export const StudyModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  height: 70%;
  background-color: white;
  z-index: 100;
  display:flex;
  flex-direction:column;
  padding:0 0 1.5rem 0;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const StudyBoxContainer = styled.div`
  width:94%;
  height:98%;
  display:flex;
  overflow-y: auto;
  scrollbar-width: thin;
  justify-content:space-between;
  gap:0.8rem;
  padding:0.5rem 0 1.5rem 0;
  flex-wrap: wrap;
  padding:0 3% 0 3%;
`

export const TitleContainer = styled.div`
  background-color:white;
  width:100%;
  height:50px;
  font-size:1.2rem;
  display:flex;
  align-items:center;
  justify-content:space-between;
`
export const TitleFont = styled.div`
  font-size:1.2rem;
  margin-left:1.8rem;
`
export const CloseButton = styled.div`
  font-size:1rem;
  margin-right:1.8rem;
  cursor:pointer;
`

export const StudyBox = styled.div`
  display:flex;
  flex-direction:column;
  gap:0.5rem;
  width:27%;
  height:11rem;
  border-radius:10px;
  padding:1.5rem 1.5rem 1.3rem 1.5rem;
  border:solid 1px lightgray;
  margin-bottom:1.5rem;
`

export const StudyName = styled.div`
  font-size:1.2rem;
  font-weight:550;
`
export const StudyDate = styled.div`
  font-size:1rem;
  color:black;
`

export const DetailButton = styled.div`
  width:100%;
  border:solid 1px lightgray;
  height:5rem;
  border-radius:10px;
  cursor:pointer;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:1.1rem;

  &:hover{
    background-color:lightgray;
  }
  &:active{
    background-color:gray;
  }
`

export const IsEndContainer = styled.div`
  display:flex;
  gap:0.4rem;
`

export const IsEndTrue = styled.div`
  background-color:black;
  color:#42FF00;
  border-radius:20px;
  width:auto;
  padding:0 0.5rem 0 0.5rem;
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight:500;
  height:2rem;
`

export const IsEndFalse = styled.div`
  background-color:lightgray;
  color:white;
  border-radius:20px;
  width:auto;
  padding:0 0.5rem 0 0.5rem;
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight:500;
  height:2rem;
`