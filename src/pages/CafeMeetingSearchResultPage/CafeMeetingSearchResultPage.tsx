import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Screen from '../../components/Basic/Screen';
import Container from '../../components/Basic/Container';
import {
  AreaTextFont,
  InputContainer,
  InputField,
  PlaceImg,
  ResearchContainer,
  ResultTextFont,
  TitleTextContainer,
  CafeList,
  List,
  Name,
  Detail,
  Adress,
  BusinessHours,
  MinBeveragePrice,
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
  DetailModal,
  ModalBackdrop,
  BusinessHoursContainer,
  BusinessHourDetailModalContent,
} from './CafeMeetingSearchResultPage.style';

import {
  useFilter,
  updateContent,
  search,
  useOption,
  useDetailModalStates,
} from './CafeMeetingSearchResultPage.hooks';

import ShortButton from 'components/ShortButton';

const CafeMeetingSearchResultPage: React.FC = () => {
  const NOT_SPECIFIED = '무관';
  const Possibility = '가능';
  const Impossibility = '불가능';
  const AREA = '역삼동';

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

  const {
    adressModalState,
    setAdressModalState,
    businessHourModalState,
    setBusinessHourModalState,
  } = useDetailModalStates();

  const handleFilterButtonClick = () => {
    setShowFitter(!showFitter);
  };

  const ApplyFilter = () => {
    setShowFitter(false);
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

  const API: any = [
    {
      cafeId: 1,
      cafeName: '귀차나',
      id: 1,
      name: '알아서 공부하자',
      startDateTime: '2024-07-14T14:00:00',
      endDateTime: '2024-07-14T17:00:00',
      maxMemberCount: 7,
      nowMemberCount: 3,
      canTalk: true,
      canJoin: true,
      isEnd: false,
    },
    {
      cafeId: 2,
      cafeName: '할게너무 많아',
      id: 1,
      name: '알아서 공부하자',
      startDateTime: '2025-05-01T11:00:00',
      endDateTime: '2025-05-01T15:00:00',
      maxMemberCount: 7,
      nowMemberCount: 3,
      canTalk: true,
      canJoin: true,
      isEnd: false,
    },
    {
      cafeId: 3,
      cafeName: '불닭먹을까?',
      id: 1,
      name: '알아서 공부하자',
      startDateTime: '2024-04-15T09:00:00',
      endDateTime: '2024-04-15T13:00:00',
      maxMemberCount: 7,
      nowMemberCount: 3,
      canTalk: true,
      canJoin: true,
      isEnd: false,
    },
  ];

  const maxMember = 10;
  const minMember = 0;

  const closeModal = () => {
    setAdressModalState(adressModalState.map(() => false));
    setBusinessHourModalState(businessHourModalState.map(() => false));
  };

  const handleAdressDetailModalClick = (index) => {
    const updatedStates = [...adressModalState];
    updatedStates[index] = !updatedStates[index];
    setAdressModalState(updatedStates);
  };

  const handleBusinessHourDetailModalClick = (index) => {
    const updatedStates = [...businessHourModalState];
    updatedStates[index] = !updatedStates[index];
    setBusinessHourModalState(updatedStates);
  };

  return (
    <Screen>
      <Container>
        <TitleTextContainer>
          <AreaTextFont>{AREA}</AreaTextFont>
          <ResultTextFont>기반 카공 모임 검색 결과</ResultTextFont>
        </TitleTextContainer>
        <ResearchContainer>
          <InputContainer>
            <InputField
              placeholder={AREA}
              value={area}
              onChange={(e) => setArea(e.target.value)}
            ></InputField>
            <PlaceImg src="/assets/place-icon.png"></PlaceImg>
          </InputContainer>
          <ShortButton
            message="필터"
            color="white"
            onClick={handleFilterButtonClick}
          />
          <ShortButton message="검색" color="black" />
        </ResearchContainer>
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
                    {Possibility}
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
                    {Impossibility}
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
                      if (newValue > maxMember || newValue < 0) {
                        setMaxMemberCount(null);
                      } else {
                        setMaxMemberCount(newValue);
                      }
                    }}
                  />
                  명
                  {maxMemberCount === null && (
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
                    {Possibility}
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
                    {Impossibility}
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
        <CafeList>
          {API.map((study, index) => (
            <List>
              <Detail>
                <Name>{study.name}</Name>
                <Adress>{study.cafeName}</Adress>
                <BusinessHoursContainer>
                  <BusinessHours>
                    {window.innerWidth <= 768 ? (
                      '시작 시간'
                    ) : (
                      <>
                        {'시작: ' + study.startDateTime.replace('T', ' ')}
                        <br />
                        {'끝: ' + study.endDateTime.replace('T', ' ')}
                      </>
                    )}
                  </BusinessHours>
                  <DetailModal
                    src={
                      businessHourModalState[index]
                        ? '/assets/detail-icon.png'
                        : '/assets/detailv-icon.png'
                    }
                    onClick={() => handleBusinessHourDetailModalClick(index)}
                  />
                </BusinessHoursContainer>
                {businessHourModalState[index] && (
                  <>
                    <BusinessHourDetailModalContent>
                      시작: {study.startDateTime.replace('T', ' ')}
                      <br />
                      끝: {study.endDateTime.replace('T', ' ')}
                    </BusinessHourDetailModalContent>
                    <ModalBackdrop onClick={closeModal}></ModalBackdrop>
                  </>
                )}
                <MinBeveragePrice>상세 정보 ▷</MinBeveragePrice>
              </Detail>
            </List>
          ))}
        </CafeList>
      </Container>
      <Sidebar buttonColors={[, 'white', ,]} />
      <Header />
    </Screen>
  );
};

export default CafeMeetingSearchResultPage;
