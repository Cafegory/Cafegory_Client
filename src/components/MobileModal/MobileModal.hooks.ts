import StoreState  from './MobileModal.types';
import create from 'zustand';

export const useStoreMobile = create<StoreState>((set) => ({
  isMobileModalOpen: false,
  toggleMobileModal: () => set((state) => ({ isMobileModalOpen: !state.isMobileModalOpen })),
}));