import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Screen from '../../components/Basic/Screen';
import Container from '../../components/Basic/Container';
import Kakao from 'components/Kakao';
import { tokenRefresh } from '../../components/RefreshModal/RefreshModal.hooks';
import { useUser } from '../../store/users/store';
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
  DetailOnClick,
} from './CafeMeetingSearchResultPage.style';

import {
  useFilter,
  updateContent,
  search,
  useOption,
  useDetailModalStates,
  usePage,
  DateTime,
} from './CafeMeetingSearchResultPage.hooks';
import axios from 'axios';
import { Pagination } from '@mui/material';
import ShortButton from 'components/ShortButton';

const CafeMeetingSearchResultPage: React.FC = () => {
  const navigate = useNavigate();
  const {
    area: routeArea,
    onlyJoinAble: routeOnlyJoinAble,
    maxMemberCount: routeMaxMemberCount,
    canTalk: routeCanTalk,
  } = useParams();
  const [cafeStudys, setCafeStudys] = useState([]);
  const accessToken = JSON.parse(localStorage.getItem('accessToken'));
  const [area, setArea] = useState(routeArea);
  const [inputArea, setInputArea] = useState(routeArea);

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
  const {
    adressModalState,
    setAdressModalState,
    businessHourModalState,
    setBusinessHourModalState,
    addresses,
    setAddresses,
  } = useDetailModalStates();
  const { nowPage, setNowPage, maxPage, setMaxPage, pageSize, setPageSize } =
    usePage();
  const {
    isSelectedOnlyJoinAble,
    setSelectedOptionOnlyJoinAble,
    isSelecteCanTalk,
    setSelectedCanTalk,
  } = useOption();

  const { setStartDateTime, setEndDateTime } = DateTime();

  const handleFilterButtonClick = () => {
    setShowFitter(!showFitter);
  };

  const ApplyFilter = () => {
    setShowFitter(false);
    setOnlyJoinAble(onlyJoinAbleState);
    setMaxMemberCount(maxMemberCountState);
    setCanTalk(canTalkState);
  };

  const handleOnlyJoinAbleOptionClick = (value: 'TRUE' | 'FALSE') => {
    setSelectedOptionOnlyJoinAble(value);
  };

  const handleCanTalkOptionClick = (value: 'YES' | 'NO' | 'BOTH') => {
    setSelectedCanTalk(value);
  };

  const maxMember = 10;
  const minMember = 0;

  const closeModal = () => {
    setAdressModalState(adressModalState.map(() => false));
    setBusinessHourModalState(businessHourModalState.map(() => false));
  };

  const handleBusinessHourDetailModalClick = (index) => {
    const updatedStates = [...businessHourModalState];
    updatedStates[index] = !updatedStates[index];
    setBusinessHourModalState(updatedStates);
  };

  useEffect(() => {
    axios
      .get(
        `https://cafegory.robinjoon.xyz/study/once/list?page=1&area=${routeArea}&onlyJoinAble=${routeOnlyJoinAble}&maxMemberCount=${routeMaxMemberCount}&canTalk=${routeCanTalk}&sizePerPage=5`,
        {
          headers: {
            Authorization: accessToken,
          },
        },
      )
      .then((response) => {
        setCafeStudys(response.data.list);
        setNowPage(response.data.nowPage);
        setMaxPage(response.data.maxPage);
        setPageSize(response.data.pageSize);
      })
      .catch((error) => {
        const isLoggedIn = useUser.getState().isLoggedIn;
        tokenRefresh(error, isLoggedIn);
      });
  }, [area, routeOnlyJoinAble, routeMaxMemberCount, routeCanTalk]);

  const handlePageChange = (event, newPage) => {
    setNowPage(newPage);
    axios
      .get(
        `https://cafegory.robinjoon.xyz/study/once/list?page=${newPage}&area=${area}&onlyJoinAble=${onlyJoinAble}&maxMemberCount=${maxMemberCount}&canTalk=${canTalk}&sizePerPage=5`,
        {
          headers: {
            Authorization: accessToken,
          },
        },
      )
      .then((response) => {
        setCafeStudys(response.data.list);
        setMaxPage(response.data.maxPage);
        setPageSize(response.data.pageSize);
      })
      .catch((error) => {
        const isLoggedIn = useUser.getState().isLoggedIn;
        tokenRefresh(error, isLoggedIn);
      });
  };

  const handleSearchClick = () => {
    if (inputArea.trim() === '') {
      alert('검색어를 입력해주세요.');
      return;
    }
    axios
      .get(
        `https://cafegory.robinjoon.xyz/study/once/list?page=1&area=${inputArea}&onlyJoinAble=${onlyJoinAble}&maxMemberCount=${maxMemberCount}&canTalk=${canTalk}&sizePerPage=5`,
        {
          headers: {
            Authorization: accessToken,
          },
        },
      )
      .then((response) => {
        setCafeStudys(response.data.list);
        setNowPage(response.data.nowPage);
        setMaxPage(response.data.maxPage);
        setPageSize(response.data.pageSize);
      })
      .catch((error) => {
        const isLoggedIn = useUser.getState().isLoggedIn;
        tokenRefresh(error, isLoggedIn);
      });

    setArea(inputArea);
    // navigate(
    //   `/cafeMeetingSearchResult/1/${encodeURIComponent(area)}/${onlyJoinAble}/${maxMemberCount}/${canTalk}/5`,
    // );
  };

  const viewCafeMeetingInfo = (id) => {
    const studyOnceId = id;
    navigate(`/cafeMeetingInfo/${studyOnceId}`);
  };

  const addressesArray = [];

  useEffect(() => {
    const fetchCafeAddresses = async () => {
      try {
        for (const study of cafeStudys) {
          const response = await axios.get(
            `https://cafegory.robinjoon.xyz/cafe/${study.cafeId}`,
            {
              headers: {
                Authorization: accessToken,
              },
            },
          );
          addressesArray.push(response.data.basicInfo.address);
        }
        setAddresses(addressesArray);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCafeAddresses();
  }, [cafeStudys]);

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
              value={inputArea}
              onChange={(e) => setInputArea(e.target.value)}
            ></InputField>
            <PlaceImg src="/assets/place-icon.png"></PlaceImg>
          </InputContainer>
          <ShortButton
            message="필터"
            color="white"
            onClick={handleFilterButtonClick}
          />
          <ShortButton
            message="검색"
            color="black"
            onClick={handleSearchClick}
          />
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
        <Kakao addresses={addresses} />
        <CafeList>
          {cafeStudys.map((study, index) => (
            <List key={index}>
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
                <DetailOnClick
                  onClick={() => viewCafeMeetingInfo(study.studyOnceId)}
                >
                  상세 정보 ▷
                </DetailOnClick>
              </Detail>
            </List>
          ))}
        </CafeList>
        <Pagination
          count={maxPage}
          page={nowPage}
          onChange={handlePageChange}
        />
      </Container>
      <Sidebar buttonColors={[, 'white', ,]} />
      <Header />
    </Screen>
  );
};

export default CafeMeetingSearchResultPage;
