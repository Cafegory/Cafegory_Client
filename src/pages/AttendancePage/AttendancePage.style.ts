import styled from 'styled-components';

export const AttendanceConatiner = styled.div`
  width:80%;
  height:100%;

  @media screen and (max-width: 768px) {
    width:85%;
  }
`;

export const TitleFont = styled.div`
  font-size:1.55rem;
  font-weight:550;
`

export const DateFont = styled.div`
  font-size:1.3rem;
  font-weight:100;
  margin:0.5rem 0 2rem 0;
`

export const LeftContainer = styled.div`
  display:flex;
  width:8rem;
  align-items:center;
  justify-content:space-between;

  
 @media screen and (max-width: 768px) {
 width:6rem;
}
`

export const MemberBoxContainer = styled.div`
  width:100%;
  height:fit-content;
  margin:0.5rem 0 2.5rem 0;
`

export const MemberBox = styled.div`
  width:100%;
  height:6rem;
  border-bottom: solid 1px lightgray;
  display:flex;
  justify-content:space-between;

  
 @media screen and (max-width: 768px) {
  height:3.6rem;
}
`

export const ThumbnailImg = styled.img`
  width:3.5rem;
  height:3.5rem;
  border-radius: 50%;
  overflow: hidden;

  
 @media screen and (max-width: 768px) {
  width:2.5rem;
  height:2.5rem;
}
`

export const MemberInfoContainer = styled.div`
  width:4rem;
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:0.2rem;

  
 @media screen and (max-width: 768px) {
  width:3rem;
  gap:0;
}
`

export const AttendanceStateContainer = styled.div`
  width:6rem;
  height:100%;
 display:flex;
 align-items:center;
 justify-content:space-between;

 @media screen and (max-width: 768px) {
  width:4rem;
}
`

export const NameFont = styled.div`
  font-size:1.3rem;

 @media screen and (max-width: 768px) {
  font-size:1rem;
}
`

export const PositionFont = styled.div`
  font-size:1.1rem;
  color:gray;

  
 @media screen and (max-width: 768px) {
  font-size:0.9rem;
}
`

export const CheckImg = styled.img`
  width:2.5rem;
  height:2rem;

  @media screen and (max-width: 768px) {
    width:1.8rem;
    height:1.5rem;
  }
`