//src\pages\CafeCreateRecruitment\CafeCreateRecruitment.tsx
import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Screen from '../../components/Basic/Screen';
import Container from 'components/Basic/Container';
import LongButton from 'components/LongButton';
import 'react-datepicker/dist/react-datepicker.css';
import { useDatePickerStore } from './CafeCreateRecruitment.type';
import ko from 'date-fns/locale/ko';
import { useNavigate } from 'react-router-dom';

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
} from './CafeCreateRecruitment.style';

const CafeCreateRecruitment: React.FC = () => {
  const {
    selectedDate,
    setSelectedDate,
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
  } = useDatePickerStore();

  const MAX_NAME_LENGTH = 10;

  const MAX_MaxMemberCount_LENGTH = 10;

  const handleCreateGroup = () => {
    if (name.length > MAX_NAME_LENGTH || name.length === 0) {
      alert('그룹명은 1~10자 이내로 적어주세요.');
    }
    if (
      maxMemberCount > MAX_MaxMemberCount_LENGTH ||
      maxMemberCount === 0 ||
      maxMemberCount === null
    ) {
      alert('최대 인원은 1~10명 이내로 적어주세요.');
    }
  };

  const handleCanTalkButtonClick = (isCanTalk) => {
    const buttonIds = ['canTalkButton', 'cannotTalkButton'];
    buttonIds.forEach((id) => {
      const button = document.getElementById(id);
      if (button) {
        if (id === (isCanTalk ? 'canTalkButton' : 'cannotTalkButton')) {
          button.classList.add('selected');
        } else {
          button.classList.remove('selected');
        }
      }
    });
    setCanTalk(isCanTalk);
  };
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
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
                  onChange={(date: Date | null) => setSelectedDate(date)}
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
                  onChange={(e) => setStartTime(e.target.value)}
                >
                  {[...Array(25)].map((_, index) => {
                    const hour =
                      index === 24 ? '24' : index.toString().padStart(2, '0');
                    return (
                      <option
                        key={index}
                        value={`${hour}:00`}
                      >{`${hour}:00`}</option>
                    );
                  })}
                </StyledSelectContainer>
                부터
                <StyledSelectContainer
                  onChange={(e) => setEndTime(e.target.value)}
                >
                  {[...Array(25)].map((_, index) => {
                    const hour =
                      index === 24 ? '24' : index.toString().padStart(2, '0');
                    return (
                      <option
                        key={index}
                        value={`${hour}:00`}
                      >{`${hour}:00`}</option>
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
                  value={maxMemberCount}
                  onChange={(event) =>
                    setMaxMemberCount(parseInt(event.target.value))
                  }
                />
                명
              </MaximumInputContainer>
            </Maximum>
            <CanTalk>
              <DetailName>구성원 간 소통 여부</DetailName>
              <CanTalkButtonContainer>
                <CanTalkButton
                  id="canTalkButton"
                  onClick={() => {
                    setCanTalk(true);
                    handleCanTalkButtonClick(true);
                  }}
                >
                  가능
                </CanTalkButton>
                <CanTalkButton
                  id="cannotTalkButton"
                  onClick={() => {
                    setCanTalk(false);
                    handleCanTalkButtonClick(false);
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
              onClick={handleCreateGroup}
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
