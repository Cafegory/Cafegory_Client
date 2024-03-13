import React, { useEffect } from 'react';
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
} from './CafeCreateRecruitmentPage.style';

import { OptionContent, DateTime } from './CafeCreateRecruitmentPage.hooks';

const CafeCreateRecruitment: React.FC = () => {
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
  const { starDateTime, setStarDateTime, endDateTime, setEndDateTime } =
    DateTime();

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
    setStarDateTime(newStarDateTime);
    setEndDateTime(newEndDateTime);
  }, [selectedDate, startTime, selectedDate, endTime]);

  const accessToken = process.env.REACT_APP_ACCESS_TOKEN;
  console.log(accessToken);

  const sendData = {
    cafeId: 1,
    name: name,
    startDateTime: starDateTime,
    endDateTime: endDateTime,
    maxMemberCount: maxMemberCount,
    canTalk: canTalk,
  };

  const createMeeting = async () => {
    try {
      const response = await axios.post('/study/once', sendData, {
        headers: {
          Authorization: accessToken,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const CreateMeetingClick = () => {
    createMeeting();
  };

  return (
    <Screen>
      <Container>
        <ContainerDetail>
          <Title>그룹 생성하기</Title>
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
            <Location>
              <DetailName>장소</DetailName>
              <CafeInfo>
                <CafeImg src="/assets/cafe-img.png" alt="임시 카페 사진" />
                <CafeName>스타벅스 강남R점</CafeName>
              </CafeInfo>
            </Location>
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
                  defaultValue={0}
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
                >
                  가능
                </CanTalkButton>
                <CanTalkButton
                  onClick={() => {
                    setCanTalk(false);
                  }}
                >
                  불가
                </CanTalkButton>
              </CanTalkButtonContainer>
            </CanTalk>
          </Detail>
          <ButtonContainer>
            <LongButton
              color="black"
              message="그룹 생성하기"
              onClick={CreateMeetingClick}
            />
            <LongButton
              color="red"
              message="뒤로가기"
              onClick={createMeeting}
            />
          </ButtonContainer>
        </ContainerDetail>
      </Container>
      <Sidebar buttonColors={['white', ,]} />
      <Header />
    </Screen>
  );
};

export default CafeCreateRecruitment;
