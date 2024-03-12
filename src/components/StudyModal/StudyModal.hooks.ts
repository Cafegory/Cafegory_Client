import StoreState  from './StudyModal.types';
import create from 'zustand';

export const studyUseStore = create<StoreState>((set) => ({
  isStudyModalOpen: false,
  toggleStudyModal: () => set((state) => ({ isStudyModalOpen: !state.isStudyModalOpen })),
}));