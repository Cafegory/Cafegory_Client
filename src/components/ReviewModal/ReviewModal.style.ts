import styled from 'styled-components';

export const ReviewModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  height: 70%;
  background-color: white;
  z-index: 100;
  display:flex;
  flex-direction: column;
  overflow-y: auto;
  scrollbar-width: thin;
  align-items:center;
  gap:0.8rem;
  padding:2rem 0 1.5rem 0;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const TitleContainer = styled.div`
  position: fixed;
  z-index:200;
  top: -100%;
  left: 0;
  transform: translate(-50%, -600%);
  background-color:white;
  width:70%;
  top: 50%;
  left: 50%;
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
  margin-right:3rem;
  cursor:pointer;
`

export const ReviewsBox = styled.div`
  display:flex;
  flex-direction:column;
  gap:0.5rem;
  width:90%;
  height:fit-content;
  background-color:rgba(0, 0, 0, 0.05);
  border-radius:8px;
  padding:1.5rem 1.5rem 1.5rem 1.5rem;
`
export const ReviewsUpContainer = styled.div`
  width:100%;
  display:flex;
  justify-content:space-between;
`
export const ProfileImg = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`;

export const ReviewsUserContainer = styled.div`
  display:flex;
  justify-content:space-between;
  gap:0.5rem;
  font-weight:500;
  align-items:center;
  font-size:1.15rem;
`

export const RateContainer = styled.div`
  display:flex;
  justify-content:space-between;
`

export const StarImg = styled.img`
  width: 1.7rem;
  height: 1.7rem;
`;

export const ReviewsContentContainer = styled.div`
word-wrap: break-word;
  font-size:1.1rem;
  width: 100%;
`
