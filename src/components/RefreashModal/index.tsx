import React from 'react';
import {
  RefreashModal,
  ModalBackdrop,
  ButtonContainer,
  MessageFont,
  QuestionFont,
} from './RefreashModal.style';
import { refreashStore } from './RefreashModal.hooks';
import ShortButton from 'components/ShortButton';
import { useNavigate } from 'react-router-dom';

const Refreash: React.FC = () => {
  const toggleRefreashModal = refreashStore(
    (state) => state.toggleRefreashModal,
  );

  const navigate = useNavigate();

  return (
    <>
      <RefreashModal>
        <MessageFont>토큰이 만료되었습니다.</MessageFont>
        <QuestionFont>로그인 상태를 유지하시겠습니까?</QuestionFont>
        <ButtonContainer>
          <ShortButton
            message="유지"
            color="white"
            onClick={() => {
              navigate('/main');
            }}
          ></ShortButton>
          <ShortButton
            message="로그아웃"
            color="black"
            onClick={() => {
              navigate('/main');
            }}
          ></ShortButton>
        </ButtonContainer>
      </RefreashModal>
      <ModalBackdrop></ModalBackdrop>
    </>
  );
};

export default Refreash;
