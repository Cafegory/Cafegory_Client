import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Screen from 'components/Basic/Screen';
import Container from 'components/Basic/Container';

const TemporaryMain: React.FC = () => {
  return (
    <Screen>
      <Sidebar buttonColors={[, ,]}></Sidebar>
      <Container></Container>
      <Header></Header>
    </Screen>
  );
};

export default TemporaryMain;
