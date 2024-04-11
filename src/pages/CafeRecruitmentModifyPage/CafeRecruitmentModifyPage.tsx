import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Screen from '../../components/Basic/Screen';
import Container from 'components/Basic/Container';
import LongButton from 'components/LongButton';
import 'react-datepicker/dist/react-datepicker.css';
import ko from 'date-fns/locale/ko';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { parseISO } from 'date-fns';
import {
  Title,
  Detail,
  ButtonContainer,
  ContainerDetail,
  GroupName,
  Location,
  Date,
  Time,
  Maximum,
  CanTalk,
  DetailName,
  InputContainer,
  EditImg,
  InputField,
  CafeImg,
  CafeName,
  DateContatiner,
  CafeInfo,
  DateImg,
  CustomDatePicker,
  SelectContainer as StyledSelectContainer,
  Choose,
  MaximumInputContainer,
  MaximumInput,
  CanTalkButton,
  CanTalkButtonContainer,
  Warning,
  MemberManagement,
  ProfileImg,
  ManagementContainer,
  MemberDetail,
  MemberName,
  MemberPart,
  Underline,
  ManagementIcon,
} from './CafeRecruitmentModifyPage.style';

import {
  OptionContent,
  DateTime,
  Member,
} from './CafeRecruitmentModifyPage.hooks';

const CafeRecruitmentModify: React.FC = () => {
  const { studyOnceId } = useParams();
  const accessToken = process.env.REACT_APP_ACCESS_TOKEN;
  const [members, setMembers] = useState([]);
  const {
    name,
    setName,
    maxMemberCount,
    setMaxMemberCount,
    canTalk,
    setCanTalk,
    startTime,
    setStartTime,
    endTime,
    setEndTime,
    selectedDate,
    setSelectedDate,
  } = OptionContent();
  const { startDateTime, setStartDateTime, endDateTime, setEndDateTime } =
    DateTime();

  const { memberName, setMemberName, thumbnailImg, setThumbnailImg } = Member();

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const maxMember = 10;
  const minMember = 0;
  const maxLength = 10;

  const combineDateTime = (date: Date, time: number): string => {
    const formattedDate = format(date, 'yyyy-MM-dd');
    const formattedTime = time.toString().padStart(2, '0') + ':00:00';
    return `${formattedDate}T${formattedTime}`;
  };

  useEffect(() => {
    const newStarDateTime = combineDateTime(selectedDate, startTime);
    const newEndDateTime = combineDateTime(selectedDate, endTime);
    setStartDateTime(newStarDateTime);
    setEndDateTime(newEndDateTime);
  }, [selectedDate, startTime, selectedDate, endTime]);

  const cafeStudyModifyClick = () => {};

  const cafeStudyDelete = () => {};

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/study/once/${studyOnceId}/member/list`,
          {
            headers: {
              Authorization: accessToken,
            },
          },
        );
        setMembers(response.data.joinedMembers);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [studyOnceId]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/study/once/${studyOnceId}`, {
          headers: {
            Authorization: accessToken,
          },
        });
        console.log(`그룹 정보 불러오기:`, response.data);
        setName(response.data.name);
        setMaxMemberCount(parseInt(response.data.maxMemberCount));
        setCanTalk(response.data.canTalk);
        setSelectedDate(parseISO(response.data.startDateTime));
        const startTimePart = response.data.startDateTime.split('T')[1];
        const startTime = parseInt(startTimePart.split(':')[0]);
        setStartTime(startTime);
        const endTimePart = response.data.endDateTime.split('T')[1];
        const endTime = parseInt(endTimePart.split(':')[0]);
        setEndTime(endTime);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Screen>
      <Container>
        <ContainerDetail>
          <Title>그룹 정보 수정</Title>
          <Detail>
            <GroupName>
              <DetailName>그룹명</DetailName>
              <InputContainer>
                <InputField
                  type="text"
                  placeholder="그룹명을 입력해주세요."
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
                <EditImg src="/assets/edit-icon.png" alt="수정 아이콘" />
              </InputContainer>
              {name.length > maxLength && (
                <Warning>
                  그룹명은 최대 {maxLength}글자까지 입력 가능합니다.
                </Warning>
              )}
            </GroupName>
            <Date>
              <DetailName>날짜</DetailName>
              <DateContatiner>
                <CustomDatePicker
                  selected={selectedDate}
                  onChange={(value: Date) => setSelectedDate(value)}
                  dateFormat="yyyy년 MM월 dd일 EEEE"
                  placeholderText="날짜를 선택해주세요."
                  locale={ko}
                />
                <DateImg src="/assets/date-icon.png" alt="달력 아이콘" />
              </DateContatiner>
            </Date>
            <Time>
              <DetailName>카공시간</DetailName>
              <Choose>
                <StyledSelectContainer
                  value={startTime}
                  onChange={(e) => setStartTime(parseInt(e.target.value))}
                >
                  {[...Array(25)].map((_, index) => {
                    const hour =
                      index === 24 ? '24' : index.toString().padStart(2, '0');
                    return (
                      <option key={index} value={index}>{`${hour}:00`}</option>
                    );
                  })}
                </StyledSelectContainer>
                부터
                <StyledSelectContainer
                  value={endTime}
                  onChange={(e) => setEndTime(parseInt(e.target.value))}
                >
                  {[...Array(25)].map((_, index) => {
                    const hour =
                      index === 24 ? '24' : index.toString().padStart(2, '0');
                    return (
                      <option key={index} value={index}>{`${hour}:00`}</option>
                    );
                  })}
                </StyledSelectContainer>
                까지
              </Choose>
            </Time>
            <Maximum>
              <DetailName>최대 인원</DetailName>
              <MaximumInputContainer>
                <MaximumInput
                  type="number"
                  value={maxMemberCount || '0'}
                  min={minMember}
                  max={maxMember}
                  onChange={(e) => {
                    const newValue = parseInt(e.target.value);
                    if (newValue > maxMember || newValue < 0) {
                      setMaxMemberCount(null);
                    } else {
                      setMaxMemberCount(newValue);
                    }
                  }}
                />
                명
                {maxMemberCount === null && (
                  <Warning>
                    {minMember}~{maxMember} 이하의 숫자로 입력해주세요.
                  </Warning>
                )}
              </MaximumInputContainer>
            </Maximum>
            <CanTalk>
              <DetailName>구성원 간 소통 여부</DetailName>
              <CanTalkButtonContainer>
                <CanTalkButton
                  onClick={() => {
                    setCanTalk(true);
                  }}
                  style={{
                    backgroundColor: canTalk
                      ? 'rgba(0, 0, 0, 0.2)'
                      : 'rgba(0, 0, 0, 0.05)',
                  }}
                >
                  가능
                </CanTalkButton>
                <CanTalkButton
                  onClick={() => {
                    setCanTalk(false);
                  }}
                  style={{
                    backgroundColor: !canTalk
                      ? 'rgba(0, 0, 0, 0.2)'
                      : 'rgba(0, 0, 0, 0.05)',
                  }}
                >
                  불가
                </CanTalkButton>
              </CanTalkButtonContainer>
            </CanTalk>
            <MemberManagement>
              <DetailName>구성원 관리</DetailName>
              {members.map((member, index) => (
                <div key={index}>
                  <ManagementContainer>
                    <ProfileImg src={member.thumbnailImg} />
                    <MemberDetail>
                      <MemberName>{member.name}</MemberName>
                      <MemberPart>{index === 0 ? '팀장' : '팀원'}</MemberPart>
                    </MemberDetail>
                    {index !== 0 && (
                      <ManagementIcon src="/assets/management-icon.png" />
                    )}
                  </ManagementContainer>

                  {index < members[0].length && <Underline />}
                </div>
              ))}
            </MemberManagement>
          </Detail>
          <ButtonContainer>
            <LongButton
              color="black"
              message="저장 및 적용"
              onClick={cafeStudyModifyClick}
            />
            <LongButton
              color="gray"
              message="뒤로가기"
              onClick={handleGoBack}
            />
            <LongButton
              color="red"
              message="그룹 삭제하기"
              onClick={cafeStudyDelete}
            />
          </ButtonContainer>
        </ContainerDetail>
      </Container>
      <Sidebar buttonColors={['white', ,]} />
      <Header />
    </Screen>
  );
};

export default CafeRecruitmentModify;