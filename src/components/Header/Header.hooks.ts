import { useUser } from '../../store/users/store';
import { UserState } from './Header.type';
import create from 'zustand';
import StoreState  from './Header.type';

export const useHeader = () => {
  return useUser((state: UserState) => state.isLoggedIn);
};

export const useStore = create<StoreState>((set) => ({
  isLoginModalOpen: false,
  toggleLoginModal: () => set((state) => ({ isLoginModalOpen: !state.isLoginModalOpen })),
}));