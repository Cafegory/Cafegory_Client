import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Screen from '../../components/Basic/Screen';
import Container from 'components/Basic/Container';
import LongButton from 'components/LongButton';
import 'react-datepicker/dist/react-datepicker.css';
import { useDatePickerStore } from './CafeCreateRecruitment.type';
import ko from 'date-fns/locale/ko';

import {
  Title,
  Detail,
  ButtonContainer,
  ContainerDetail,
  Profile,
  GroupName,
  Location,
  Date,
  Time,
  Maximum,
  CanTalk,
  DetailName,
  PhotoContaioner,
  Photo,
  EditGuideMessage,
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
  const { selectedDate, setSelectedDate } = useDatePickerStore();

  return (
    <Screen>
      <Container>
        <ContainerDetail>
          <Title>그룹 생성하기</Title>
          <Detail>
            <Profile>
              <DetailName>프로필 사진</DetailName>
              <PhotoContaioner>
                <Photo src="/assets/basic-profile.jpg" alt="기본 프로필 사진" />
                <EditGuideMessage>편집하려면 클릭하세요.</EditGuideMessage>
              </PhotoContaioner>
            </Profile>
            <GroupName>
              <DetailName>그룹명</DetailName>
              <InputContainer>
                <InputField type="text" placeholder="그룹명을 입력해주세요." />
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
                <StyledSelectContainer>
                  {' '}
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
                <StyledSelectContainer>
                  {' '}
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
                <MaximumInput />명
              </MaximumInputContainer>
            </Maximum>
            <CanTalk>
              <DetailName>구성원 간 소통 여부</DetailName>
              <CanTalkButtonContainer>
                <CanTalkButton>가능</CanTalkButton>
                <CanTalkButton>불가</CanTalkButton>
              </CanTalkButtonContainer>
            </CanTalk>
          </Detail>
          <ButtonContainer>
            <LongButton color="black" message="그룹 생성하기" />
            <LongButton color="red" message="뒤로가기" />
          </ButtonContainer>
        </ContainerDetail>
      </Container>
      <Sidebar buttonColors={['white', ,]} />
      <Header />
    </Screen>
  );
};

export default CafeCreateRecruitment;
