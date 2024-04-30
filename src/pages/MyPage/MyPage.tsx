import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Screen from 'components/Basic/Screen';
import Container from 'components/Basic/Container';
import {
  IntroduceFont,
  MypageContainer,
  NameFont,
  ProfileImg,
  TitleFont,
} from './MyPage.style';
import ShortButton from 'components/ShortButton';
import { useNavigate } from 'react-router-dom';
import { profileApiStore } from './MyPage.hooks';
import { useEffect } from 'react';

const My: React.FC = () => {
  const { name, introduction, thumbnailingImg, fetchProfile } =
    profileApiStore();
  React.useEffect(() => {
    fetchProfile();
  }, []);
  const navigate = useNavigate();

  useEffect(() => {
    const memberId = localStorage.getItem('memberId');
    if (!memberId) {
      alert('로그인이 필요합니다.');
      navigate('/');
    }
  }, []);

  return (
    <Screen>
      <Container>
        <MypageContainer>
          <TitleFont>마이페이지</TitleFont>
          <ProfileImg src={thumbnailingImg} alt="프로필 사진"></ProfileImg>
          <NameFont>{name}</NameFont>

          {introduction === null ? (
            <IntroduceFont>
              수정하기를 눌러 자기소개를 작성해주세요.
            </IntroduceFont>
          ) : (
            <IntroduceFont>{introduction}</IntroduceFont>
          )}
          <ShortButton
            message="수정하기"
            color="black"
            onClick={() => {
              navigate('/mypageEdit');
            }}
          ></ShortButton>
        </MypageContainer>
      </Container>
      <Sidebar buttonColors={[, , 'white']} />
      <Header />
    </Screen>
  );
};

export default My;
