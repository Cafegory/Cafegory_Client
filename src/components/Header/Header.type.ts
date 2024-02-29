export interface HeaderProps {}

export interface UserState {
  isLoggedIn: boolean;
}

export default interface StoreState {
  isLoginModalOpen: boolean;
  toggleLoginModal: () => void;
}