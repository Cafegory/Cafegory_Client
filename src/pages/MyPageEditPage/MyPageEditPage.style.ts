import styled from 'styled-components';

export const MypageEditContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  gap:1.2rem;
  width:100%;
  align-items:center;

  @media (max-width: 768px) {
    gap:0.5rem;
  }
`

export const TitleFont = styled.div`
  font-weight:550;
  font-size:1.7rem;
  padding-bottom:1rem;

  @media (max-width: 768px) {
    padding-bottom:0.5rem;
  }
`;


export const InputContainer =styled.div`
  width:32%;
  display:flex;
  flex-direction:column;
  gap:0.3rem;

  @media (max-width: 768px) {
    width:65%;
  }
`

export const InputLabelFont = styled.div`
  font-size:1rem;
`
export const NameInput = styled.textarea`
  width:25rem;
  height:1.5rem;
  font-size:0.9rem;
  resize: none;

  @media (max-width: 768px) {
    width:100%;
  }
`

export const IntroductionInput = styled.textarea`
  width:25rem;
  height:4rem;
  font-size:0.9rem;
  resize: none;

  @media (max-width: 768px) {
    width:100%;
    height:6rem;
  }
`

export const ButtonContainer = styled.div`
  width:100%;
  display:flex;
  gap:0.5rem;
  justify-content:center;
  padding-top:1.5rem;

  @media (max-width: 768px) {
    flex-direction:column;
    align-items:center;
    padding-top:1rem;
  }
`

export const AlertFont = styled.div`
  color:red;
  font-size:0.9rem;
`

export const profileImg = styled.img`
  width:15rem;
  height:15rem;
`