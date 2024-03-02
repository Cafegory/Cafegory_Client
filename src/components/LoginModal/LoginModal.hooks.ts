import StoreState  from './LoginModal.types';
import create from 'zustand';

export const useStore = create<StoreState>((set) => ({
  isLoginModalOpen: false,
  toggleLoginModal: () => set((state) => ({ isLoginModalOpen: !state.isLoginModalOpen })),
}));