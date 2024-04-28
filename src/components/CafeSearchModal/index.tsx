import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  CafeSearchModalContainer,
  InputContainer,
  InputField,
  PlaceImg,
  ResearchContainer,
  CafeList,
  List,
  Name,
  Detail,
  Adress,
  BusinessHours,
  MinBeveragePrice,
  IsOpenImg,
  FitterContainer,
  FitterTitle,
  ChooseOption,
  StudyAvailability,
  ChooseFont,
  Choose,
  Option,
  DetailModal,
  AdressContainer,
  AdressDetailModalContent,
  BusinessHoursContainer,
  BusinessHourDetailModalContent,
  ModalBackdrop,
  SelectContainer as StyledSelectContainer,
} from './CafeSearchModal.style';

import ShortButton from 'components/ShortButton';
import {
  useFilter,
  updateContent,
  search,
  useOption,
  useDetailModalStates,
  usePage,
  cafeinfo,
} from './CafeSearchModal.hook';
import { Pagination } from '@mui/material';

const CafeSearchModal: React.FC<{ onSelectCafe: (cafeId: number) => void }> = ({
  onSelectCafe,
}) => {
  const [cafes, setCafes] = useState([]);
  const {
    canStudy,
    setCanStudy,
    canStudyState,
    setCanStudyState,
    startTime,
    setStartTime,
    startTimeState,
    setStartTimeState,
    endTime,
    setEndTime,
    endTimeState,
    setEndTimeState,
    minBeveragePrice,
    setMinBeveragePrice,
    minBeveragePriceState,
    setMinBeveragePriceState,
    maxTime,
    setMaxTime,
    maxTimeState,
    setMaxTimeState,
  } = updateContent();
  const {
    isSelectedCanStudy,
    setSelectedCanStudy,
    isSelectedMinBeveragePrice,
    setSelectedMinBeveragePrice,
    isSelectedMaxTime,
    setSelectedMaxTime,
  } = useOption();
  const {
    adressModalState,
    setAdressModalState,
    businessHourModalState,
    setBusinessHourModalState,
  } = useDetailModalStates();
  const { nowPage, setNowPage, maxPage, setMaxPage, pageSize, setPageSize } =
    usePage();
  const { showFitter, setShowFitter } = useFilter();
  const { area, setArea, inputArea, setInputArea } = search();
  const { cafeName, setCafeName, cafeId, setCafeId } = cafeinfo();
  const accessToken = JSON.parse(localStorage.getItem('accessToken'));
  const handleSearchClick = () => {
    if (inputArea.trim() === '') {
      alert('검색어를 입력해주세요.');
      return;
    }
    axios
      .get(
        `/cafe/list?page=1&area=${inputArea}&canStudy=${canStudy}&startTime=${startTime}&endTime=${endTime}&minBeveragePrice=${minBeveragePrice}&maxTime=${maxTime}&sizePerPage=3`,
        {
          headers: {
            Authorization: accessToken,
          },
        },
      )
      .then((response) => {
        console.log('요청성공?');
        console.log(response.data);
        setCafes(response.data.list);
        setNowPage(response.data.nowPage);
        setMaxPage(response.data.maxPage);
        setPageSize(response.data.pageSize);
      })
      .catch((error) => {
        console.error('요청 중 에러 발생:', error);
      });

    setArea(inputArea);
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

  const closeModal = () => {
    setAdressModalState(adressModalState.map(() => false));
    setBusinessHourModalState(businessHourModalState.map(() => false));
  };

  const handlePageChange = (event, newPage) => {
    setNowPage(newPage);

    axios
      .get(
        `/cafe/list?page=${newPage}&area=${area}&canStudy=${canStudy}&startTime=${startTime}&endTime=${endTime}&minBeveragePrice=${minBeveragePrice}&maxTime=${maxTime}&sizePerPage=3`,
        {
          headers: {
            Authorization: accessToken,
          },
        },
      )
      .then((response) => {
        setCafes(response.data.list);
        setMaxPage(response.data.maxPage);
        setPageSize(response.data.pageSize);
      })
      .catch((error) => {
        console.error('요청 중 에러 발생:', error);
      });
  };

  const formatBusinessHours = (businessHours) => {
    const daysOfWeek = [
      'MONDAY',
      'TUESDAY',
      'WEDNESDAY',
      'THURSDAY',
      'FRIDAY',
      'SATURDAY',
      'SUNDAY',
    ];
    let formattedHoursArray = [];

    let sameHoursCount = 1;
    let sameHours = false;
    let startDayIndex = 0;

    let currentFormattedHours = '';

    for (let i = 0; i < businessHours.length; i++) {
      const currentDayIndex = daysOfWeek.indexOf(businessHours[i].day);
      const nextDayIndex = daysOfWeek.indexOf(businessHours[i + 1]?.day);

      if (
        nextDayIndex === currentDayIndex + 1 &&
        businessHours[i].startTime === businessHours[i + 1].startTime &&
        businessHours[i].endTime === businessHours[i + 1].endTime
      ) {
        sameHoursCount++;
        sameHours = true;
        if (sameHoursCount === 2) {
          startDayIndex = currentDayIndex;
        }
      } else {
        if (sameHours) {
          currentFormattedHours += `${daysOfWeek[startDayIndex]}~${daysOfWeek[currentDayIndex]} ${businessHours[i].startTime}-${businessHours[i].endTime}\n`;
          sameHours = false;
          sameHoursCount = 1;
        } else {
          currentFormattedHours += `${businessHours[i].day} ${businessHours[i].startTime}-${businessHours[i].endTime}\n`;
        }

        formattedHoursArray.push(currentFormattedHours);

        currentFormattedHours = '';
      }
    }

    return formattedHoursArray;
  };

  const handleFilterButtonClick = () => {
    setShowFitter(!showFitter);
  };

  const handleCanTalkOptionClick = (value: 'TRUE' | 'FALSE') => {
    setSelectedCanStudy(value);
  };

  const NOT_SPECIFIED = '무관';
  const Possibility = '가능';
  const Impossibility = '불가능';

  const drinkPrices = [
    NOT_SPECIFIED,
    '~1,000원',
    '~2,000원',
    '~3,000원',
    '~4,000원',
    '~5,000원',
    '~6,000원',
    '~7,000원',
    '~8,000원',
    '~9,000원',
    '~10,000원',
    '10,000원~',
  ];

  const usageTimes = [
    NOT_SPECIFIED,
    '~1시간',
    '~2시간',
    '~3시간',
    '~4시간',
    '~5시간',
    '~6시간',
    '6시간~',
  ];

  const renderDrinkPriceOptions = () => {
    return drinkPrices.map((price, index) => (
      <Option
        key={index}
        onClick={() => {
          setSelectedMinBeveragePrice(index);
          setMinBeveragePriceState(index);
        }}
        style={{
          backgroundColor:
            isSelectedMinBeveragePrice === index
              ? 'rgba(0, 0, 0, 0.2)'
              : 'rgba(0, 0, 0, 0.05)',
        }}
      >
        {price}
      </Option>
    ));
  };

  const renderUsageTimeOptions = () => {
    return usageTimes.map((time, index) => (
      <Option
        key={index}
        onClick={() => {
          setSelectedMaxTime(index);
          setMaxTimeState(index);
        }}
        style={{
          backgroundColor:
            isSelectedMaxTime === index
              ? 'rgba(0, 0, 0, 0.2)'
              : 'rgba(0, 0, 0, 0.05)',
        }}
      >
        {time}
      </Option>
    ));
  };

  const ApplyFilter = () => {
    setCanStudy(canStudyState);
    setStartTime(startTimeState);
    setEndTime(endTimeState);
    setMinBeveragePrice(minBeveragePriceState);
    setMaxTime(maxTimeState);
    setShowFitter(false);
  };

  const handleCafeSelect = (cafeId) => {
    console.log(`넘겨줄 카페 아이디${cafeId}`);
    onSelectCafe(cafeId);
  };

  return (
    <CafeSearchModalContainer>
      <ResearchContainer>
        <InputContainer>
          <InputField
            placeholder={'검색어를 입력해주세요'}
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
        <ShortButton message="검색" color="black" onClick={handleSearchClick} />
      </ResearchContainer>
      {showFitter && (
        <FitterContainer>
          <FitterTitle>필터</FitterTitle>
          <ChooseOption>
            <StudyAvailability>
              <ChooseFont>카페에서 공부?</ChooseFont>
              <Choose>
                <Option
                  onClick={() => {
                    handleCanTalkOptionClick('TRUE');
                    setCanStudyState(true);
                  }}
                  style={{
                    backgroundColor:
                      isSelectedCanStudy === 'TRUE'
                        ? 'rgba(0, 0, 0, 0.2)'
                        : 'rgba(0, 0, 0, 0.05)',
                  }}
                >
                  {Possibility}
                </Option>
                <Option
                  onClick={() => {
                    handleCanTalkOptionClick('FALSE');
                    setCanStudyState(false);
                  }}
                  style={{
                    backgroundColor:
                      isSelectedCanStudy === 'FALSE'
                        ? 'rgba(0, 0, 0, 0.2)'
                        : 'rgba(0, 0, 0, 0.05)',
                  }}
                >
                  {Impossibility}
                </Option>
              </Choose>
            </StudyAvailability>
            <StudyAvailability>
              <ChooseFont>영업 시간</ChooseFont>
              <Choose>
                <StyledSelectContainer
                  value={startTimeState}
                  onChange={(e) => setStartTimeState(parseInt(e.target.value))}
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
                  value={endTimeState}
                  onChange={(e) => setEndTimeState(parseInt(e.target.value))}
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
            </StudyAvailability>
            <StudyAvailability>
              <ChooseFont>음료 최저가</ChooseFont>
              <Choose>{renderDrinkPriceOptions()}</Choose>
            </StudyAvailability>
            <StudyAvailability>
              <ChooseFont>최대 이용 가능 시간</ChooseFont>
              <Choose>{renderUsageTimeOptions()}</Choose>
            </StudyAvailability>
          </ChooseOption>
          <ShortButton message="적용" color="black" onClick={ApplyFilter} />
        </FitterContainer>
      )}
      <CafeList>
        {cafes.map((cafe, index) => (
          <List key={index} onClick={() => handleCafeSelect(cafe.cafeId)}>
            <Detail>
              <Name>{cafe.name}</Name>
              <AdressContainer>
                <Adress>
                  {window.innerWidth <= 768
                    ? cafe.address.split(' ').slice(0, 3).join(' ')
                    : cafe.address}
                </Adress>
                <DetailModal
                  src={
                    adressModalState[index]
                      ? '/assets/detail-icon.png'
                      : '/assets/detailv-icon.png'
                  }
                  onClick={() => handleAdressDetailModalClick(index)}
                />
              </AdressContainer>
              {adressModalState[index] && (
                <>
                  <AdressDetailModalContent>
                    {cafe.address}
                  </AdressDetailModalContent>
                  <ModalBackdrop onClick={closeModal}></ModalBackdrop>
                </>
              )}
              <div onClick={closeModal}></div>
              <BusinessHoursContainer>
                <BusinessHours>
                  {window.innerWidth <= 768
                    ? formatBusinessHours(cafe.businessHours)[0]
                    : formatBusinessHours(cafe.businessHours)}
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
                    {formatBusinessHours(cafe.businessHours)}
                  </BusinessHourDetailModalContent>
                  <ModalBackdrop onClick={closeModal}></ModalBackdrop>
                </>
              )}
              <MinBeveragePrice>
                가장 저렴함 음료 {cafe.minBeveragePrice}원
              </MinBeveragePrice>
            </Detail>
            {cafe.isOpen ? (
              <IsOpenImg src="/assets/isOpen.png" alt="영업중" />
            ) : null}
          </List>
        ))}
      </CafeList>
      <Pagination count={maxPage} page={nowPage} onChange={handlePageChange} />
    </CafeSearchModalContainer>
  );
};

export default CafeSearchModal;
