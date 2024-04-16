import styled from 'styled-components';

export const WriteReviewContainer = styled.div`
  width:100%;
  height:30rem;
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:2rem;

  @media screen and (max-width: 768px) {
    gap:1.5rem;
  }
`

export const ReviewContent = styled.textarea`
  width:60%;
  height:15rem;
  resize: none;
  display:flex;
  font-size:1.3rem;

  @media screen and (max-width: 768px) {
    width:70%;
  }
`;

export const StarContainer = styled.div`
  widht:100%;
  display:flex;
  gap:1rem;
  justify-content:center;

  @media screen and (max-width: 768px) {
    width:60%;
    gap:0.5rem;
  }
`

export const StarImg = styled.img`
  width:3rem;
  height:3rem;
  cursor:pointer;

  @media screen and (max-width: 768px) {
    width:2.5rem;
    height:2.5rem;
  }
`

export const ButtonContainer = styled.div`
  display:flex;
  width:100%;
  gap:1rem;
  justify-content:center;

  @media screen and (max-width: 768px) {
    flex-direction:column;
    align-items:Center;
  }
`

export const AlertFont = styled.div`
  font-size:1rem;
  color:red;
`