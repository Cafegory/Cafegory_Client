import StoreState  from './RefreashModal.types';
import create from 'zustand';

export const refreashStore = create<StoreState>((set) => ({
  isRefreashModalOpen: false,
  toggleRefreashModal: () => set((state) => ({ isRefreashModalOpen: !state.isRefreashModalOpen })),
}));