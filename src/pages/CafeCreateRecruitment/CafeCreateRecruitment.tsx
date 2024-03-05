import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Screen from '../../components/Basic/Screen';
import Container from 'components/Basic/Container';
import LongButton from 'components/LongButton';

import {
  Title,
  Detail,
  ButtonContainer,
  ContainerDetail,
} from './CafeCreateRecruitment.style';

const CafeCreateRecruitment: React.FC = () => {
  return (
    <Screen>
      <Container>
        <ContainerDetail>
          <Title>그룹 생성하기</Title>
          <Detail>옵션 설정</Detail>
          <ButtonContainer>
            <LongButton color="black" message="그룹 생성하기" />
            <LongButton color="red" message="뒤로가기" />
          </ButtonContainer>
        </ContainerDetail>
      </Container>
      <Sidebar buttonColors={['white', ,]} />
      <Header />
    </Screen>
  );
};

export default CafeCreateRecruitment;
