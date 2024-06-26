import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Screen from '../../components/Basic/Screen';
import Container from 'components/Basic/Container';
import LongButton from 'components/LongButton';
import CafeSearchModal from 'components/CafeSearchModal';
import 'react-datepicker/dist/react-datepicker.css';
import ko from 'date-fns/locale/ko';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { parseISO } from 'date-fns';
import { tokenRefresh } from '../../components/RefreshModal/RefreshModal.hooks';
import { useUser } from '../../store/users/store';
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
  CafeChangeButton,
  OpenKakao,
  Close,
} from './CafeRecruitmentModifyPage.style';

import {
  OptionContent,
  DateTime,
  cafeChange,
  member,
  useMemberStore,
} from './CafeRecruitmentModifyPage.hooks';

import { cafeInfo } from 'pages/CafeCreateRecruitmentPage/CafeCreateRecruitmentPage.hooks';

const CafeRecruitmentModify: React.FC = () => {
  const { studyOnceId } = useParams();
  const accessToken = JSON.parse(localStorage.getItem('accessToken'));
  const { members, setMembers, memberIds, setMemberIds, getMemberList } =
    useMemberStore();
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
    openChatUrl,
    setOpenChatUrl,
    nowMemberCount,
    setNowMemberCount,
  } = OptionContent();
  const { startDateTime, setStartDateTime, endDateTime, setEndDateTime } =
    DateTime();
  const { cafeName, setCafeName, cafeId, setCafeId, getCafeInfo } = cafeInfo();
  const { showCafeSearch, setShowCafeSearch } = cafeChange();
  const { creatorId, setCreatorId } = member();
  const [currentCafeId, setCurrentCafeId] = useState(cafeId);
  const navigate = useNavigate();

  const handleGoBack = () => {
    const redirectUrl = localStorage.getItem('goBackUrl') || '/';
    navigate(redirectUrl);
  };

  const maxMember = 10;
  const minMember = 1;
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://cafegory.robinjoon.xyz/study/once/${studyOnceId}/member/list`,
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
        setMemberIds(ids);
      } catch (error) {
        const isLoggedIn = useUser.getState().isLoggedIn;
        tokenRefresh(error, isLoggedIn);
      }
    };
    fetchData();
  }, [studyOnceId]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://cafegory.robinjoon.xyz/study/once/${studyOnceId}`,
          {
            headers: {
              Authorization: accessToken,
            },
          },
        );
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
        setCafeId(response.data.cafeId);
        setCurrentCafeId(response.data.cafeId);
        setCreatorId(response.data.creatorId);
        setOpenChatUrl(response.data.openChatUrl);
        setNowMemberCount(response.data.nowMemberCount);
      } catch (error) {
        const isLoggedIn = useUser.getState().isLoggedIn;
        tokenRefresh(error, isLoggedIn);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (cafeId !== null) {
      getCafeInfo();
    }
  }, [cafeId]);

  const handleCafeSelect = (cafeId) => {
    setCafeId(cafeId);
    setShowCafeSearch(false);
  };

  const sendData = {
    cafeId: cafeId,
    name: name,
    startDateTime: startDateTime,
    endDateTime: endDateTime,
    maxMemberCount: maxMemberCount,
    canTalk: canTalk,
  };

  const cafeStudyModifyClick = async () => {
    if (name.length === 0) {
      alert('그룹명을 입력해주세요.');
    } else if (openChatUrl.length === 0) {
      alert('오픈채팅방 url을 입력해주세요.');
    } else {
      try {
        if (currentCafeId !== cafeId) {
          await axios.post(
            `https://cafegory.robinjoon.xyz/email`,
            {
              messageType: 'STUDYONCE_LOCATION_CHANGED',
              memberIds: memberIds,
            },
            {
              headers: {
                Authorization: accessToken,
              },
            },
          );
        }

        await axios.patch(
          `https://cafegory.robinjoon.xyz/study/once/${studyOnceId}`,
          sendData,
          {
            headers: {
              Authorization: accessToken,
            },
          },
        );

        navigate(`/cafeMeetingInfo/${studyOnceId}`);
      } catch (error) {
        const isLoggedIn = useUser.getState().isLoggedIn;
        tokenRefresh(error, isLoggedIn);
        if (
          error.response.data.errorMessage ===
          '카공 생성시 시작시간과 종료시간은 카페 영업시간내에 포함되어야 합니다.'
        ) {
          alert('카공시간을 확인해주세요.');
        } else {
          alert(`${error.response.data.errorMessage}`);
        }
      }
    }
  };

  const handleFilterButtonClick = () => {
    setShowCafeSearch(!showCafeSearch);
  };

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
                  disabled={nowMemberCount > 1}
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
                <CafeChangeButton onClick={handleFilterButtonClick}>
                  장소변경
                </CafeChangeButton>
              </CafeInfo>
            </Location>
            {showCafeSearch && (
              <CafeSearchModal onSelectCafe={handleCafeSelect} />
            )}
            <Date>
              <DetailName>날짜</DetailName>
              <DateContatiner>
                <CustomDatePicker
                  disabled={nowMemberCount > 1}
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
                  disabled={nowMemberCount > 1}
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
                  disabled={nowMemberCount > 1}
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
                {maxMemberCount < nowMemberCount && (
                  <Warning>참여중인 인원보다 적게 설정할 수 없습니다.</Warning>
                )}
              </MaximumInputContainer>
            </Maximum>
            <CanTalk>
              <DetailName>구성원 간 소통 여부</DetailName>
              <CanTalkButtonContainer>
                <CanTalkButton
                  onClick={() => {
                    if (nowMemberCount <= 1) {
                      setCanTalk(true);
                    }
                  }}
                  style={{
                    backgroundColor: canTalk
                      ? 'rgba(0, 0, 0, 0.2)'
                      : 'rgba(0, 0, 0, 0.05)',
                    cursor: nowMemberCount > 1 ? 'disabled' : 'pointer',
                  }}
                >
                  가능
                </CanTalkButton>
                <CanTalkButton
                  onClick={() => {
                    if (nowMemberCount <= 1) {
                      setCanTalk(false);
                    }
                  }}
                  style={{
                    backgroundColor: !canTalk
                      ? 'rgba(0, 0, 0, 0.2)'
                      : 'rgba(0, 0, 0, 0.05)',
                    cursor: nowMemberCount > 1 ? 'disabled' : 'pointer',
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
                  disabled={nowMemberCount > 1}
                  type="text"
                  placeholder="오픈채팅방 url을 입력해주세요."
                  value={openChatUrl}
                  onChange={(event) => setOpenChatUrl(event.target.value)}
                />
              </InputContainer>
            </OpenKakao>
            <MemberManagement>
              <DetailName>구성원</DetailName>
              {members.map((member, index) => (
                <div key={index}>
                  <ManagementContainer>
                    <ProfileImg src={member.thumbnailImg} />
                    <MemberDetail>
                      <MemberName>{member.name}</MemberName>
                      <MemberPart>
                        {member.memberId === creatorId ? '팀장' : '팀원'}
                      </MemberPart>
                    </MemberDetail>
                  </ManagementContainer>
                  <Underline />
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
          </ButtonContainer>
        </ContainerDetail>
      </Container>
      <Sidebar buttonColors={['white', ,]} />
      <Header />
    </Screen>
  );
};

export default CafeRecruitmentModify;
