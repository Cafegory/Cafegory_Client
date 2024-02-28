//MainPage.tsx

import React from 'react';
import Header from '../../components/Header';
import Button from '../../components/Button';

const Main: React.FC = () => {
  return (
    <div>
      <Header />
      <Button message="임시" color="black" />
    </div>
  );
};

export default Main;
