import React, { useEffect, useState } from 'react';
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
} from './CafeMeetingSearchResultPage.style';

import {
  useFilter,
  updateContent,
  search,
  useOption,
  usePage,
  DateTime,
} from './CafeMeetingSearchResultPage.hooks';

import ShortButton from 'components/ShortButton';
import axios from 'axios';

const CafeMeetingSearchResultPage: React.FC = () => {
  const [cafeStudys, setCafeStudys] = useState([]);
  const accessToken = process.env.REACT_APP_ACCESS_TOKEN;

  const NOT_SPECIFIED = '무관';
  const Possibility = '가능';
  const Impossibility = '불가능';

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

  const { startDateTime, setStartDateTime, endDateTime, setEndDateTime } =
    DateTime();

  const { nowPage, setNowPage, maxPage, setMaxPage, pageSize, setPageSize } =
    usePage();

  const { area, setArea } = search();

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

  const maxMember = 10;
  const minMember = 0;

  useEffect(() => {
    axios
      .get('/study/once/list?area=역삼동&page=1', {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        setCafeStudys(response.data.list);
        setNowPage(response.data.nowPage);
        setMaxPage(response.data.maxPage);
        setPageSize(response.data.pageSize);
        setStartDateTime(response.data.list.startDateTime);
        setEndDateTime(response.data.list.endDateTime);
        setArea(response.data.list[0].area);
      })
      .catch((error) => {
        console.error('요청 중 에러 발생:', error);
      });
  });

  return (
    <Screen>
      <Container>
        <TitleTextContainer>
          <AreaTextFont>{area}</AreaTextFont>
          <ResultTextFont>기반 카공 모임 검색 결과</ResultTextFont>
        </TitleTextContainer>
        <ResearchContainer>
          <InputContainer>
            <InputField
              placeholder={area}
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
          {cafeStudys.map((cafeStudys) => (
            <List>
              <Detail>
                <Name>{cafeStudys.name}</Name>
                <Adress>{cafeStudys.address}</Adress>
                <BusinessHours>시작: {cafeStudys.startDateTime}</BusinessHours>
                <BusinessHours>끝: {cafeStudys.endDateTime}</BusinessHours>
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
