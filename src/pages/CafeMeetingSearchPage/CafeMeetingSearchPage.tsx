import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Screen from '../../components/Basic/Screen';
import Container from 'components/Basic/Container';
import ShortButton from 'components/ShortButton';
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
  Warning,
} from './CafeMeetingSearchPage.style';

import {
  useFilter,
  updateContent,
  search,
  useOption,
} from './CafeMeetingSearchPage.hooks';

const CafeCreateRecruitment: React.FC = () => {
  const NOT_SPECIFIED = '무관';
  const CAN_STUDY = '가능';
  const CANNOT_STUDY = '불가능';

  const { showFitter, setShowFitter } = useFilter();

  const {
    onlyJoinAble,
    setOnlyJoinAble,
    onlyJoinAbleState,
    setOnlyJoinAbleState,
    maxMemberCount,
    setMaxMemberCount,
    maxMemberCountState,
    setMaxMemberCountState,
    canTalk,
    setCanTalk,
    canTalkState,
    setCanTalkState,
  } = updateContent();

  const { area, setArea } = search();

  const handleFilterButtonClick = () => {
    setShowFitter(!showFitter);
  };

  const ApplyFilter = () => {
    setOnlyJoinAble(onlyJoinAbleState);
    setMaxMemberCount(maxMemberCountState);
    setCanTalk(canTalkState);
  };

  const {
    isSelectedOnlyJoinAble,
    setSelectedOptionOnlyJoinAble,
    isSelecteCanTalk,
    setSelectedCanTalk,
  } = useOption();

  const handleOnlyJoinAbleOptionClick = (value: 'TRUE' | 'FALSE') => {
    setSelectedOptionOnlyJoinAble(value);
  };

  const handleCanTalkOptionClick = (value: 'YES' | 'NO' | 'BOTH') => {
    setSelectedCanTalk(value);
  };

  useEffect(() => {}, [onlyJoinAble, maxMemberCount, canTalk, area]);

  const maxMember = 10;
  const minMember = 0;

  return (
    <Screen>
      <Container>
        <CafeSearch>
          <TitleFont>카공 모임 검색</TitleFont>
          <InputContainer>
            <InputField
              type="text"
              placeholder="검색어를 입력하세요 (예: 역삼동, 스타벅스 강남R점)"
              value={area}
              onChange={(e) => setArea(e.target.value)}
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
                    onClick={() => {
                      handleOnlyJoinAbleOptionClick('TRUE');
                      setOnlyJoinAbleState(true);
                    }}
                    style={{
                      backgroundColor:
                        isSelectedOnlyJoinAble === 'TRUE'
                          ? 'rgba(0, 0, 0, 0.2)'
                          : 'rgba(0, 0, 0, 0.05)',
                    }}
                  >
                    {CAN_STUDY}
                  </Option>
                  <Option
                    onClick={() => {
                      handleOnlyJoinAbleOptionClick('FALSE');
                      setOnlyJoinAbleState(false);
                    }}
                    style={{
                      backgroundColor:
                        isSelectedOnlyJoinAble === 'FALSE'
                          ? 'rgba(0, 0, 0, 0.2)'
                          : 'rgba(0, 0, 0, 0.05)',
                    }}
                  >
                    {CANNOT_STUDY}
                  </Option>
                </Choose>
              </StudyAvailability>
              <StudyAvailability>
                <ChooseFont>카공 최대 인원</ChooseFont>
                <MaximumInputContainer>
                  <MaximumInput
                    type="number"
                    defaultValue={0}
                    min={minMember}
                    max={maxMember}
                    onChange={(e) => {
                      const newValue = parseInt(e.target.value);
                      if (newValue > maxMember) {
                        setMaxMemberCountState(null);
                      } else {
                        setMaxMemberCountState(newValue);
                      }
                    }}
                  />
                  명
                  {maxMemberCountState === null && (
                    <Warning>1~10 이하의 숫자로 입력해주세요.</Warning>
                  )}
                </MaximumInputContainer>
              </StudyAvailability>
              <StudyAvailability>
                <ChooseFont>대화 가능?</ChooseFont>
                <Choose>
                  <Option
                    onClick={() => {
                      handleCanTalkOptionClick('YES');
                      setCanTalkState('YES');
                    }}
                    style={{
                      backgroundColor:
                        isSelecteCanTalk === 'YES'
                          ? 'rgba(0, 0, 0, 0.2)'
                          : 'rgba(0, 0, 0, 0.05)',
                    }}
                  >
                    {CAN_STUDY}
                  </Option>
                  <Option
                    onClick={() => {
                      handleCanTalkOptionClick('NO');
                      setCanTalkState('NO');
                    }}
                    style={{
                      backgroundColor:
                        isSelecteCanTalk === 'NO'
                          ? 'rgba(0, 0, 0, 0.2)'
                          : 'rgba(0, 0, 0, 0.05)',
                    }}
                  >
                    {CANNOT_STUDY}
                  </Option>
                  <Option
                    onClick={() => {
                      handleCanTalkOptionClick('BOTH');
                      setCanTalkState('BOTH');
                    }}
                    style={{
                      backgroundColor:
                        isSelecteCanTalk === 'BOTH'
                          ? 'rgba(0, 0, 0, 0.2)'
                          : 'rgba(0, 0, 0, 0.05)',
                    }}
                  >
                    {NOT_SPECIFIED}
                  </Option>
                </Choose>
              </StudyAvailability>
            </ChooseOption>
            <ShortButton message="적용" color="black" onClick={ApplyFilter} />
          </FitterContainer>
        )}
      </Container>
      <Sidebar buttonColors={[, 'white']} />
      <Header />
    </Screen>
  );
};

export default CafeCreateRecruitment;
