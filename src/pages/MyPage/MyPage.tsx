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

const My: React.FC = () => {
  const api = {
    name: '취준생',
    thumbnailImg: 'https://~~',
    introduction: '안녕하세요 수연이에요 ',
  };

  const navigate = useNavigate();

  return (
    <Screen>
      <Container>
        <MypageContainer>
          <TitleFont>마이페이지</TitleFont>
          <ProfileImg src={api.thumbnailImg} alt="프로필 사진"></ProfileImg>
          <NameFont>{api.name}</NameFont>
          <IntroduceFont>{api.introduction}</IntroduceFont>
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
