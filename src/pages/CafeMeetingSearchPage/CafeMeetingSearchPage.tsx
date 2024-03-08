import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Screen from '../../components/Basic/Screen';
import Container from 'components/Basic/Container';
import ShortButton from 'components/ShortButton';
import { useFilter } from './CafeMeetingSearchPage.hooks';
import { useDatePickerStore } from './CafeMeetingSearchPage.type';
import {
  CafeSearch,
  TitleFont,
  InputContainer,
  ButtonContainer,
  InputField,
  FitterContainer,
  FitterTitle,
  ChooseOption,
  StudyAvailability,
  ChooseFont,
  Choose,
  Option,
  // SelectContainer as StyledSelectContainer,
  MaximumInputContainer,
  MaximumInput,
} from './CafeMeetingSearchPage.style';

import {
  CAN_STUDY,
  CANNOT_STUDY,
  NOT_SPECIFIED,
} from './CafeMeetingSearchPage.type';

const CafeCreateRecruitment: React.FC = () => {
  const {
    // setArea,
    // startTime,
    // endTime,
    // setStartTime,
    // setEndTime,
    showFitter,
    setShowFitter,
    // minBeveragePrice,
    //maxTime,
    //setMinBeveragePrice,
    //setMaxTime,
    // canStudy,
    // setCanStudy,
  } = useFilter();

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

  const handleFilterButtonClick = () => {
    setShowFitter(!showFitter);
  };

  const token =
    'eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE3MDk5MDA2MDYsImV4cCI6MTcwOTkwNDIwNiwibWVtYmVySWQiOjYsInRva2VuVHlwZSI6ImFjY2VzcyJ9.eAqVtzFiA-ZIcz88bc1n418hrimWGc7PxUQ3oJssubUwhAOoTBgqpGBjr3QSz4tAvx9SaUD69VMIPiSTosf2Mg';

  fetch('http://52.78.210.204/study/once/list?area=aa&page=1&canTalk=BOTH', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      // 응답 처리
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  return (
    <Screen>
      <Container>
        <CafeSearch>
          <TitleFont>카공 모임 검색</TitleFont>
          <InputContainer>
            <InputField
              type="text"
              placeholder="검색어를 입력하세요 (예: 역삼동, 스타벅스 강남R점)"
              // onChange={(e) => setArea(e.target.value)}
            />
          </InputContainer>
          <ButtonContainer>
            <ShortButton
              message="필터"
              color="white"
              onClick={handleFilterButtonClick}
            />
            <ShortButton message="검색" color="black" onClick={() => {}} />
          </ButtonContainer>
        </CafeSearch>
        {showFitter && (
          <FitterContainer>
            <FitterTitle>필터</FitterTitle>
            <ChooseOption>
              <StudyAvailability>
                <ChooseFont>카공 참여 가능?</ChooseFont>
                <Choose>
                  <Option
                  // onClick={() => handleAvailabilityClick(CAN_STUDY)}
                  // className={canStudy === CAN_STUDY ? 'selected' : ''}
                  >
                    {CAN_STUDY}
                  </Option>
                  <Option
                  // onClick={() => handleAvailabilityClick(CANNOT_STUDY)}
                  // className={canStudy === CANNOT_STUDY ? 'selected' : ''}
                  >
                    {CANNOT_STUDY}
                  </Option>
                </Choose>
              </StudyAvailability>
              <StudyAvailability>
                <ChooseFont>카공 최대 인원</ChooseFont>
                <MaximumInputContainer>
                  <MaximumInput
                    value={maxMemberCount}
                    onChange={(event) =>
                      setMaxMemberCount(parseInt(event.target.value))
                    }
                  />
                  명
                </MaximumInputContainer>
              </StudyAvailability>
              <StudyAvailability>
                <ChooseFont>대화 가능?</ChooseFont>
                {/*상태관리 이후에 추가*/}
                <Choose>
                  <Option>{CAN_STUDY}</Option>
                  <Option>{CANNOT_STUDY}</Option>
                  <Option>{NOT_SPECIFIED}</Option>
                </Choose>
              </StudyAvailability>
            </ChooseOption>
            <ShortButton message="적용" color="black" />
          </FitterContainer>
        )}
      </Container>
      <Sidebar buttonColors={['white', ,]} />
      <Header />
    </Screen>
  );
};

export default CafeCreateRecruitment;
