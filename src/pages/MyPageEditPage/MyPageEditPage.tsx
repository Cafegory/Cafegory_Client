import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Screen from 'components/Basic/Screen';
import Container from 'components/Basic/Container';
import {
  ButtonContainer,
  InputContainer,
  InputLabelFont,
  IntroductionInput,
  MypageEditContainer,
  NameInput,
  TitleFont,
} from './MyPageEditPage.style';
import ShortButton from 'components/ShortButton';
import { useNameStore, useIntroductionStore } from './MyPageEdit.hooks';

const MyPageEdit: React.FC = () => {
  const { name, setName } = useNameStore();
  const { introduction, setIntroduction } = useIntroductionStore();

  const api = {
    name: '짱구',
    thumbnailImg: 'https://~~',
    introduction: '안녕하세요 짱구에요 ',
  };

  return (
    <Screen>
      <Container>
        <MypageEditContainer>
          <TitleFont>수정하기</TitleFont>
          <InputContainer>
            <InputLabelFont>이름</InputLabelFont>
            <NameInput
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></NameInput>
          </InputContainer>
          <InputContainer>
            <InputLabelFont>자기 소개</InputLabelFont>
            <IntroductionInput
              value={introduction}
              onChange={(e) => setIntroduction(e.target.value)}
            ></IntroductionInput>
          </InputContainer>
          <ButtonContainer>
            <ShortButton message="프로필 사진 변경" color="white"></ShortButton>
            <ShortButton message="완료" color="black"></ShortButton>
          </ButtonContainer>
        </MypageEditContainer>
      </Container>
      <Sidebar buttonColors={[, , 'white']} />
      <Header />
    </Screen>
  );
};

export default MyPageEdit;
