import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Screen from 'components/Basic/Screen';
import Container from 'components/Basic/Container';
import axios from 'axios';
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
import {
  member,
  AttendanceState,
  useCheckedStateStore,
} from './AttendancePage.hook';
import { tokenRefresh } from '../../components/RefreshModal/RefreshModal.hooks';
import { useUser } from '../../store/users/store';

const Attendance: React.FC = () => {
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

  const accessToken = JSON.parse(localStorage.getItem('accessToken'));
  const { studyOnceId: routeStudyOnceId } = useParams();
  const [members, setMembers] = useState([]);

  const { creatorId, setCreatorId, memberIds, setMemberIds } = member();
  const { attendance, setAttendance } = AttendanceState();
  // const { checkedState, setCheckedState } = useCheckedStateStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://cafegory.robinjoon.xyz/study/once/${routeStudyOnceId}/member/list`,
          {
            headers: {
              Authorization: accessToken,
            },
          },
        );
        const ids = response.data.joinedMembers.map(
          (member) => member.memberId,
        );
        setMembers(response.data.joinedMembers);
        console.log(response.data.joinedMembers);
        setMemberIds(ids);
        console.log(`출력${ids}`);
      } catch (error) {
        const isLoggedIn = useUser.getState().isLoggedIn;
        tokenRefresh(error, isLoggedIn);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://cafegory.robinjoon.xyz/study/once/${routeStudyOnceId}`,
          {
            headers: {
              Authorization: accessToken,
            },
          },
        );
        setCreatorId(response.data.creatorId);
      } catch (error) {
        const isLoggedIn = useUser.getState().isLoggedIn;
        tokenRefresh(error, isLoggedIn);
      }
    };

    fetchData();
  }, []);

  const clickSave = async () => {
    try {
      const data = members.map((member) => ({
        memberId: member.memberId,
        attendance: checkedState[member.memberId]?.check || false,
      }));

      console.log(`출력해보기!!!! ${JSON.stringify(checkedState)}`);
      console.log(`데이터! ${JSON.stringify(data)}`);
      const response = await axios.patch(
        `https://cafegory.robinjoon.xyz/study/once/${routeStudyOnceId}/attendance`,
        { states: data },
        {
          headers: {
            Authorization: accessToken,
          },
        },
      );
      console.log('요청 성공!');
      console.log(response);
    } catch (error) {
      alert(error.response.data.errorMessage);
      const isLoggedIn = useUser.getState().isLoggedIn;
      tokenRefresh(error, isLoggedIn);
    }
  };

  const [checkedState, setCheckedState] = useState({});

  const handleImageClick = (memberId) => {
    setCheckedState((prevState) => ({
      ...prevState,
      [memberId]: {
        check: !prevState[memberId]?.check,
        x: !prevState[memberId]?.x,
      },
    }));
  };

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
            {members.map((member, index) => (
              <MemberBox key={index}>
                <LeftContainer>
                  <ThumbnailImg src={member.thumbnailImg}></ThumbnailImg>
                  <MemberInfoContainer>
                    <NameFont>{member.name}</NameFont>
                    <PositionFont>
                      {member.memberId === creatorId ? '팀장' : '팀원'}
                    </PositionFont>
                  </MemberInfoContainer>
                </LeftContainer>
                <AttendanceStateContainer>
                  <CheckImg
                    src={
                      checkedState[member.memberId]?.check
                        ? '../assets/check-true.png'
                        : '../assets/check-false.png'
                    }
                    onClick={() => handleImageClick(member.memberId)}
                  />
                  <CheckImg
                    src={
                      checkedState[member.memberId]?.x
                        ? '../assets/x-false.png'
                        : '../assets/x-true.png'
                    }
                    onClick={() => handleImageClick(member.memberId)}
                  />
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
