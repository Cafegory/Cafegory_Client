import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Screen from 'components/Basic/Screen';
import Container from 'components/Basic/Container';
import {
  AttendanceConatiner,
  AttendanceStateContainer,
  CheckImg,
  DateFont,
  LeftContainer,
  MemberBox,
  MemberBoxContainer,
  MemberInfoContainer,
  NameFont,
  PositionFont,
  ThumbnailImg,
  TitleFont,
} from './AttendancePage.style';
import LongButton from 'components/LongButton';

const Attendance: React.FC = () => {
  const api = {
    states: [
      {
        memberId: 1,
        attendance: false,
        lastUpdateTime: 'yyyy-MM-ddThh:mm:ss',
      },
      {
        memberId: 2,
        attendance: false,
        lastUpdateTime: 'yyyy-MM-ddThh:mm:ss',
      },
    ],
  };

  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  let dayOfWeek = today.getDay();
  var dayOfWeekString = getDayOfWeekString(dayOfWeek);

  function getDayOfWeekString(dayOfWeek) {
    var days = ['일', '월', '화', '수', '목', '금', '토'];
    return days[dayOfWeek];
  }

  const clickSave = () => {};

  return (
    <Screen>
      <Sidebar buttonColors={[, ,]}></Sidebar>
      <Container>
        <AttendanceConatiner>
          <TitleFont>날짜</TitleFont>
          <DateFont>
            {year}년 {month}월 {day}일 {dayOfWeekString}요일
          </DateFont>
          <TitleFont>출결 관리</TitleFont>
          <MemberBoxContainer>
            {api.states.map((item) => (
              <MemberBox>
                <LeftContainer>
                  <ThumbnailImg src="../assets/cafe-img.png"></ThumbnailImg>
                  <MemberInfoContainer>
                    <NameFont>수빈</NameFont>
                    <PositionFont>팀장</PositionFont>
                  </MemberInfoContainer>
                </LeftContainer>
                <AttendanceStateContainer>
                  <CheckImg src="../assets/check-false.png"></CheckImg>
                  <CheckImg src="../assets/x-true.png"></CheckImg>
                </AttendanceStateContainer>
              </MemberBox>
            ))}
          </MemberBoxContainer>
          <LongButton
            message="출석부 저장"
            color="black"
            onClick={clickSave}
          ></LongButton>
        </AttendanceConatiner>
      </Container>
      <Header></Header>
    </Screen>
  );
};

export default Attendance;
