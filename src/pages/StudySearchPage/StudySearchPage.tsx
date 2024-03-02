import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Screen from 'components/Basic/Screen';
import Container from 'components/Basic/Container';

const StudySearch: React.FC = () => {
  return (
    <Screen>
      <Container></Container>
      <Sidebar buttonColors={[, 'white']} />
      <Header></Header>
    </Screen>
  );
};

export default StudySearch;
