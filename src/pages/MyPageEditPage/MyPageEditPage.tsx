import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Screen from 'components/Basic/Screen';
import Container from 'components/Basic/Container';
import {
  AlertFont,
  ButtonContainer,
  InputContainer,
  InputLabelFont,
  IntroductionInput,
  MypageEditContainer,
  NameInput,
  TitleFont,
} from './MyPageEditPage.style';
import ShortButton from 'components/ShortButton';
import { ProfileImg } from 'pages/MyPage/MyPage.style';
import { profileApiStore } from 'pages/MyPage/MyPage.hooks';
import { useNavigate } from 'react-router-dom';

const MyPageEdit: React.FC = () => {
  const navigate = useNavigate();
  const maxNameLength = 8;
  const maxIntroductionLength = 300;

  const fileInput = React.useRef(null);
  const { name, setName, setIntroduction, introduction, patchProfile } =
    profileApiStore();

  const handleProfileEdit = async () => {
    await patchProfile();
    navigate('/my');
  };

  return (
    <Screen>
      <Container>
        <MypageEditContainer>
          <TitleFont>수정하기</TitleFont>
          {/* <ProfileImg src={profilePicture} alt="프로필 사진"></ProfileImg> */}
          <InputContainer>
            <InputLabelFont>이름</InputLabelFont>
            <NameInput
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={maxNameLength}
            />
            {name.length < 1 && (
              <AlertFont>* 1글자 이상 입력해주세요.</AlertFont>
            )}
            {name.length >= maxNameLength && (
              <AlertFont>
                * 이름은 {maxNameLength}글자를 넘을 수 없습니다.
              </AlertFont>
            )}
          </InputContainer>
          <InputContainer>
            <InputLabelFont>자기 소개</InputLabelFont>
            <IntroductionInput
              value={introduction}
              onChange={(e) => setIntroduction(e.target.value)}
              maxLength={maxIntroductionLength}
            ></IntroductionInput>
            {introduction !== null &&
              introduction.length >= maxIntroductionLength && (
                <AlertFont>
                  * 자기 소개를 {maxIntroductionLength}글자 이하로 작성해주세요.
                </AlertFont>
              )}
          </InputContainer>
          <ButtonContainer>
            {/* <ShortButton
              message="사진 변경"
              color="white"
              onClick={() => {
                fileInput.current.click();
              }}
            ></ShortButton>
            <input
              type="file"
              style={{ display: 'none' }}
              accept="image/*,.jpg,.png,.jpeg"
              name="profile_img"
              onChange={onChange}
              ref={fileInput}
            /> */}
            <ShortButton
              message="완료"
              color="black"
              onClick={handleProfileEdit}
            ></ShortButton>
          </ButtonContainer>
        </MypageEditContainer>
      </Container>
      <Sidebar buttonColors={[, , 'white']} />
      <Header />
    </Screen>
  );
};

export default MyPageEdit;
