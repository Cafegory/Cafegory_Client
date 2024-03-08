import React, { useEffect, useState } from 'react';
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
  MaximumInputContainer,
  MaximumInput,
} from './CafeMeetingSearchPage.style';

import {
  CAN_STUDY,
  CANNOT_STUDY,
  NOT_SPECIFIED,
} from './CafeMeetingSearchPage.type';

const CafeCreateRecruitment: React.FC = () => {
  const { showFitter, setShowFitter } = useFilter();

  const {
    maxMemberCount,
    setMaxMemberCount,
    onlyJoinAble,
    setOnlyJoinAble,
    participation,
    setParticipation,
  } = useDatePickerStore();

  const handleFilterButtonClick = () => {
    setShowFitter(!showFitter);
  };
  const ApplyFilter = () => {
    console.log('카공 참여 기본값', onlyJoinAble);
    console.log('최대인원 기본값', maxMemberCount);

    if (participation === CAN_STUDY) {
      setOnlyJoinAble(true);
    } else if (participation === CANNOT_STUDY) {
      setOnlyJoinAble(false);
    }

    const inputElement = document.getElementById(
      'maxMemberCount',
    ) as HTMLInputElement;
    if (inputElement) {
      const parsedValue = parseInt(inputElement.value);
      setMaxMemberCount(Number.isNaN(parsedValue) ? 0 : parsedValue);
    }
  };

  const handleApplyButtonClick = () => {
    ApplyFilter();
    const inputElement = document.getElementById(
      'maxMemberCount',
    ) as HTMLInputElement;
    setMaxMemberCount(parseInt(inputElement.value) || 0);
  };

  useEffect(() => {
    console.log('상태 변경 후 카공 참여 가능한지', onlyJoinAble);
    console.log('상태 변경 후 최대인원', maxMemberCount);
  }, [onlyJoinAble, maxMemberCount]);

  useEffect(() => {
    ApplyFilter();
  }, []);
  return (
    <Screen>
      <Container>
        <CafeSearch>
          <TitleFont>카공 모임 검색</TitleFont>
          <InputContainer>
            <InputField
              type="text"
              placeholder="검색어를 입력하세요 (예: 역삼동, 스타벅스 강남R점)"
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
                  <Option onClick={() => setParticipation(CAN_STUDY)}>
                    {CAN_STUDY}
                  </Option>
                  <Option onClick={() => setParticipation(CANNOT_STUDY)}>
                    {CANNOT_STUDY}
                  </Option>
                </Choose>
              </StudyAvailability>
              <StudyAvailability>
                <ChooseFont>카공 최대 인원</ChooseFont>
                <MaximumInputContainer>
                  <MaximumInput
                    id="maxMemberCount"
                    type="number"
                    defaultValue={0}
                  />
                  명
                </MaximumInputContainer>
              </StudyAvailability>
              <StudyAvailability>
                <ChooseFont>대화 가능?</ChooseFont>
                <Choose>
                  <Option>{CAN_STUDY}</Option>
                  <Option>{CANNOT_STUDY}</Option>
                  <Option>{NOT_SPECIFIED}</Option>
                </Choose>
              </StudyAvailability>
            </ChooseOption>
            <ShortButton
              message="적용"
              color="black"
              onClick={handleApplyButtonClick}
            />
          </FitterContainer>
        )}
      </Container>
      <Sidebar buttonColors={['white', ,]} />
      <Header />
    </Screen>
  );
};

export default CafeCreateRecruitment;
