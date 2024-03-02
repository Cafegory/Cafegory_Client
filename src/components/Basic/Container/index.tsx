import { ContainerStyle } from './Container.style';
import React, { PropsWithChildren } from 'react';

interface ScreenProps {}

const Container: React.FC<PropsWithChildren<ScreenProps>> = ({ children }) => {
  return <ContainerStyle>{children}</ContainerStyle>;
};

export default Container;
