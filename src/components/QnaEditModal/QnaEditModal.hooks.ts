import create from 'zustand';
import { StoreState } from './QnaEditModal.types';

export const QnaEditModalStore = create<StoreState>((set) => ({
  isModalOpen: false,
  toggleModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
}));
