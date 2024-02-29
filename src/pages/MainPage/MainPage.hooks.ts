//MainPage.hooks.ts
import { create } from 'zustand';
import { FilterState } from './MainPage.type';

export const useFilter = create<FilterState>((set) => ({
  selectedOption: '',
  studyAvailability: '가능',
  drinkPrice: '무관',
  maxUsageTime: '무관',
  searchKeyword: '',
  setStudyAvailability: (availability) =>
    set((state) => ({ ...state, studyAvailability: availability })),
  setDrinkPrice: (price) => set((state) => ({ ...state, drinkPrice: price })),
  setMaxUsageTime: (time) => set((state) => ({ ...state, maxUsageTime: time })),
  setSearchKeyword: (keyword) =>
    set((state) => ({ ...state, searchKeyword: keyword })),
  setStartTime: (time) => set((state) => ({ ...state, startTime: time })),
  setEndTime: (time) => set((state) => ({ ...state, endTime: time })),
  startTime: '09:00',
  endTime: '17:00',
  showFitter: false,
  setShowFitter: (show) => set((state) => ({ ...state, showFitter: show })),
}));

export const setStartTime = (time: string) => {};

export const setEndTime = (time: string) => {};
