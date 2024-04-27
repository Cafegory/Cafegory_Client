import { StoreState } from './QnaEditModal.types';
import { QnaEditApiStore } from './QnaEditModal.types';
import create from 'zustand';

export const QnaEditModalStore = create<StoreState>((set) => ({
  isModalOpen: false,
  toggleModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
}));

export const QnaEditApiState = create<QnaEditApiStore>((set) => ({
    editContent: "",
    setEditContent: (newContent) => set({ editContent: newContent }),
  }));
