//src\pages\CafeMeetingSearchPage\CafeMeetingSearchPage.hooks.ts
import { create } from 'zustand';
import { FilterState, NOT_SPECIFIED } from './CafeMeetingSearchPage.type';

export const useFilter = create<FilterState>((set) => ({
  area: '',
  setArea: (keyword) => set((state) => ({ ...state, area: keyword })),
  showFitter: false,
  setShowFitter: (show) => set((state) => ({ ...state, showFitter: show })),
}));
