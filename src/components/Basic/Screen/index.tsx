import { ScreenStyle } from './PageContainer.style';
import React, { PropsWithChildren } from 'react';

interface ScreenProps {}

const Screen: React.FC<PropsWithChildren<ScreenProps>> = ({ children }) => {
  return <ScreenStyle>{children}</ScreenStyle>;
};

export default Screen;
