import styled from 'styled-components';

export const CafeInfoContainer = styled.div`
    width:85%;
    display:flex;
    flex-direction:column;
    gap:3rem;
`;

export const CafeProfileContainer = styled.div`
    display:flex;
    width:100%;
    gap:1rem;
`

export const CafeImg = styled.img`
  width: 5.5rem;
  height: 5.5rem;
  border-radius:50%;
`;

export const CafeNameContainer = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:0.3rem;
`;

export const CafeNameFont = styled.div`
  font-size:1.6rem;
  font-weight:550;
  width:100%
`;

export const AddressFont = styled.div`
  font-size:1rem;
  width:100%;
  color:gray;
`
export const BusinessHoursContainer = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
`
export const BusinessHoursTitleContainer = styled.div`
  width:100%;
  display:flex;
  gap:0.3rem;
  margin-bottom:0.6rem;
`

export const TitleFont = styled.div`
  font-size:1.55rem;
  width:10%;
  font-weight:550;
  margin-bottom:0.3rem;
`
export const IsOpenContainer = styled.div`
    background-color:black;
    display:flex;
    justify-content:center;
    align-items:center;
    color:#52FF00;
    width:6.5%;
    border-radius:12px;
    height:2rem;
    font-size:1.1rem;
`

export const TimeContainer = styled.div`
  width:100%;
  height:5rem;
  border-bottom: 1px solid lightgray;
  display:flex;
  flex-direction:column;
  gap:0.1rem;
  justify-content:center;
  align-items:center;
`
export const DayOfWeekFont = styled.div`
  font-size:1.2rem;
  width:100%;
`

export const Time = styled.div`
  font-size:1rem;
  color:gray;
  width:100%;
`
export const InfoBoxContainer = styled.div`
  width:100%;
  display:Flex;
  flex-direction:column;
  gap:0.5rem;
`

export const InfoBox = styled.div`
  font-size:1.2rem;
  height:5rem;
  width:100%;
  border: 1px solid lightgray;
  border-radius:10px;
  width:100%;
  display:flex;
  align-items:center;
  gap:1rem;
  font-weight:500;
`

export const AdressImg = styled.img`
  margin-left:2rem;
  width: 1.2rem;
  height: 1.9rem;
`;

export const HomePageImg = styled.img`
  margin-left:1.5rem;
  width: 1.9rem;
  height: 1.9rem;
`;

export const PhoneImg = styled.img`
  margin-left:1.5rem;
  width: 1.9rem;
  height: 1.9rem;
`;

export const InstagramImg = styled.img`
  margin-left:1.5rem;
  width: 1.9rem;
  height: 1.9rem;
`;

export const KakaoImg = styled.img`
  margin-left:1.5rem;
  width: 1.9rem;
  height: 1.9rem;
`;

export const ReviewsContainer = styled.div`
  width:100%;
  display:Flex;
  flex-direction:column;
  gap:1rem;
`
export const ReviewsBoxContainer = styled.div`
  width:100%;
  display:flex;
  justify-content:space-between;
  gap:1rem;
`

export const ReviewsBox = styled.div`
  display:flex;
  flex-direction:column;
  gap:0.5rem;
  width:45%;
  height:9rem;
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
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
`;

export const ReviewsUserContainer = styled.div`
  display:flex;
  justify-content:space-between;
  gap:0.5rem;
  font-weight:500;
  align-items:center;
`

export const RateContainer = styled.div`
  display:flex;
  justify-content:space-between;
`

export const StarImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

export const ReviewsContentContainer = styled.div`
  font-size:1.1rem;
  width: 100%;
`

export const StudyContainer = styled.div`
width:100%;
display:flex;
flex-direction:column;
gap:1rem;
`

export const StudyBoxContainer = styled.div`
width:100%;
display:flex;
justify-content:space-between;
gap:1rem;
`

export const StudyBox = styled.div`
  display:flex;
  flex-direction:column;
  gap:0.5rem;
  width:45%;
  height:4rem;
  background-color:rgba(0, 0, 0, 0.05);
  border-radius:8px;
  padding:1rem 1.5rem 1rem 1.5rem;
  justify-content:center;
`

export const StudyNameBox = styled.div`
  display:flex;
  gap:0.5rem;
`

export const StudyName = styled.div`
  display:flex;
  font-size:1.1rem;
  font-weight:550;
`
export const StudyDateFont = styled.div`
  font-size:1rem;
  font-weight:500;
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
`

export const IsEndFalse = styled.div`
  background-color:black;
  color:#FF0000;
  border-radius:20px;
  width:auto;
  padding:0 0.5rem 0 0.5rem;
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight:500;
`

export const MoreButton = styled.div`
  font-size:1rem;
  width:100%;
  cursor:pointer;
  display:flex;
  justify-content:flex-end;
  padding-right:1rem;
`