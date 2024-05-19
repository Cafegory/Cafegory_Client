import StoreState  from './DeleteModal.types';
import create from 'zustand';

export const useStore = create<StoreState>((set) => ({
  isDeleteModalOpen: false,
  toggleDeleteModal: () => set((state) => ({ isDeleteModalOpen: !state.isDeleteModalOpen })),
  reviewId:0,
  setReviewId: (reviewId) => set(() => ({ reviewId }))
}));