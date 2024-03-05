import StoreState  from './ReviewModal.types';
import create from 'zustand';

export const useStore = create<StoreState>((set) => ({
  isReviewModalOpen: false,
  toggleReviewModal: () => set((state) => ({ isReviewModalOpen: !state.isReviewModalOpen })),
}));