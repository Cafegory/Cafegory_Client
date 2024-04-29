import React from 'react';
import { RefreashModal, ModalBackdrop } from './RefreashModal.style';
import { refreashStore } from './RefreashModal.hooks';

const Refreash: React.FC = () => {
  const toggleRefreashModal = refreashStore(
    (state) => state.toggleRefreashModal,
  );

  return (
    <>
      <RefreashModal></RefreashModal>
      <ModalBackdrop></ModalBackdrop>
    </>
  );
};

export default Refreash;
