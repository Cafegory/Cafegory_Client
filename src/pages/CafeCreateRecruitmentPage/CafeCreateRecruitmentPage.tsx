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
import { useParams } from 'react-router-dom';
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
  OpenKakao,
} from './CafeCreateRecruitmentPage.style';
import {
  OptionContent,
  DateTime,
  useOption,
  cafeInfo,
  CafeCreateResruitmentApiContent,
} from './CafeCreateRecruitmentPage.hooks';
import { isPrefixUnaryExpression } from 'typescript';

const CafeCreateRecruitment: React.FC = () => {
  const {
    name,
    setName,
    maxMemberCount,
    setMaxMemberCount,
    setCanTalk,
    startTime,
    setStartTime,
    endTime,
    setEndTime,
    selectedDate,
    setSelectedDate,
    openChatUrl,
    setOpenChatUrl,
  } = OptionContent();

  const { setStartDateTime, setEndDateTime } = DateTime();
  const { isSelectedCanStudy, setSelectedCanStudy } = useOption();
  const { cafeName, setCafeName, cafeId, setCafeId, getCafeInfo } = cafeInfo();
  const { postCafeCreateResruitment, creationSuccess, setCreationSuccess } =
    CafeCreateResruitmentApiContent();
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  const maxMember = 5;
  const minMember = 1;
  const maxLength = 10;

  const combineDateTime = (date: Date, time: number): string => {
    const formattedDate = format(date, 'yyyy-MM-dd');
    const formattedTime =
      (time === 24 ? '00' : time.toString().padStart(2, '0')) + ':00:00';
    return `${formattedDate}T${formattedTime}`;
  };

  useEffect(() => {
    const newStarDateTime = combineDateTime(selectedDate, startTime);
    const newEndDateTime = combineDateTime(selectedDate, endTime);
    setStartDateTime(newStarDateTime);
    setEndDateTime(newEndDateTime);
  }, [selectedDate, startTime, selectedDate, endTime]);

  const { cafeId: routeCafeId } = useParams();

  useEffect(() => {
    if (routeCafeId) {
      setCafeId(parseInt(routeCafeId));
    }
  }, []);

  const CreateMeetingClick = async () => {
    try {
      await postCafeCreateResruitment();
      setCreationSuccess(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (creationSuccess) {
      const studyOnceId =
        CafeCreateResruitmentApiContent.getState().studyOnceId;
      if (studyOnceId) {
        navigate(`/cafeMeetingInfo/${studyOnceId}`);
      }
    }
  }, [creationSuccess]);

  const handleCanTalkOptionClick = (value: 'TRUE' | 'FALSE') => {
    setSelectedCanStudy(value);
  };

  useEffect(() => {
    getCafeInfo();
  }, []);

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
                <CafeName>{cafeName}</CafeName>
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
                  defaultValue={1}
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
              </MaximumInputContainer>
            </Maximum>
            <CanTalk>
              <DetailName>구성원 간 소통 여부</DetailName>
              <CanTalkButtonContainer>
                <CanTalkButton
                  onClick={() => {
                    handleCanTalkOptionClick('TRUE');
                    setCanTalk(true);
                  }}
                  style={{
                    backgroundColor:
                      isSelectedCanStudy === 'TRUE'
                        ? 'rgba(0, 0, 0, 0.2)'
                        : 'rgba(0, 0, 0, 0.05)',
                  }}
                >
                  가능
                </CanTalkButton>
                <CanTalkButton
                  onClick={() => {
                    handleCanTalkOptionClick('FALSE');
                    setCanTalk(false);
                  }}
                  style={{
                    backgroundColor:
                      isSelectedCanStudy === 'FALSE'
                        ? 'rgba(0, 0, 0, 0.2)'
                        : 'rgba(0, 0, 0, 0.05)',
                  }}
                >
                  불가
                </CanTalkButton>
              </CanTalkButtonContainer>
            </CanTalk>
            <OpenKakao>
              <DetailName>오픈채팅방</DetailName>
              <InputContainer>
                <InputField
                  type="text"
                  placeholder="오픈채팅방 url을 입력해주세요."
                  value={openChatUrl}
                  onChange={(event) => setOpenChatUrl(event.target.value)}
                />
              </InputContainer>
            </OpenKakao>
          </Detail>
          <ButtonContainer>
            <LongButton
              color="black"
              message="그룹 생성하기"
              onClick={CreateMeetingClick}
            />
            <LongButton color="red" message="뒤로가기" onClick={handleGoBack} />
          </ButtonContainer>
        </ContainerDetail>
      </Container>
      <Sidebar buttonColors={['white', ,]} />
      <Header />
    </Screen>
  );
};

export default CafeCreateRecruitment;
