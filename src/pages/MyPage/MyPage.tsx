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

const My: React.FC = () => {
  const { profile, fetchProfile } = profileApiStore();
  React.useEffect(() => {
    fetchProfile();
  }, []);
  const navigate = useNavigate();

  return (
    <Screen>
      <Container>
        <MypageContainer>
          <TitleFont>마이페이지</TitleFont>
          <ProfileImg src={profile.thumbnailImg} alt="프로필 사진"></ProfileImg>
          <NameFont>{profile.name}</NameFont>

          {profile.introduction === null ? (
            <IntroduceFont>
              수정하기를 눌러 자기소개를 작성해주세요.
            </IntroduceFont>
          ) : (
            <IntroduceFont>{profile.introduction}</IntroduceFont>
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
