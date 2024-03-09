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
} from './CafeMeetingSearchPage.style';

import {
  useFilter,
  updateContent,
  search,
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

  useEffect(() => {}, [onlyJoinAble, maxMemberCount, canTalk, area]);

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
                  <Option onClick={() => setOnlyJoinAbleState(true)}>
                    {CAN_STUDY}
                  </Option>
                  <Option onClick={() => setOnlyJoinAbleState(false)}>
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
                    min={0}
                    max={10}
                    onChange={(e) =>
                      setMaxMemberCountState(parseInt(e.target.value))
                    }
                  />
                  명
                </MaximumInputContainer>
              </StudyAvailability>
              <StudyAvailability>
                <ChooseFont>대화 가능?</ChooseFont>
                <Choose>
                  <Option onClick={() => setCanTalkState('YES')}>
                    {CAN_STUDY}
                  </Option>
                  <Option onClick={() => setCanTalkState('NO')}>
                    {CANNOT_STUDY}
                  </Option>
                  <Option onClick={() => setCanTalkState('BOTH')}>
                    {NOT_SPECIFIED}
                  </Option>
                </Choose>
              </StudyAvailability>
            </ChooseOption>
            <ShortButton message="적용" color="black" onClick={ApplyFilter} />
          </FitterContainer>
        )}
      </Container>
      <Sidebar buttonColors={['white', ,]} />
      <Header />
    </Screen>
  );
};

export default CafeCreateRecruitment;
