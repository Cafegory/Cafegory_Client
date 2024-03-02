export interface LoginButtonProps {
    backgroundColor?: string;
  }

export interface FontColorProps {
    fontColor?: string;
  }


  export default interface StoreState {
    isLoginModalOpen: boolean;
    toggleLoginModal: () => void;
  }