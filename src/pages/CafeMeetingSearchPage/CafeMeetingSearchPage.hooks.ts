import { create } from 'zustand';
import { FilterState, NOT_SPECIFIED } from './CafeMeetingSearchPage.type';

export const useFilter = create<FilterState>((set) => ({
  selectedOption: '',
  canStudy: null,
  drinkPrice: NOT_SPECIFIED,
  maxUsageTime: NOT_SPECIFIED,
  area: '',
  setCanStudy: (availability) =>
    set((state) => ({ ...state, canStudy: availability })),
  setDrinkPrice: (price) => set((state) => ({ ...state, drinkPrice: price })),
  setMaxUsageTime: (time) => set((state) => ({ ...state, maxUsageTime: time })),
  setArea: (keyword) => set((state) => ({ ...state, area: keyword })),
  setStartTime: (time) => set((state) => ({ ...state, startTime: time })),
  setEndTime: (time) => set((state) => ({ ...state, endTime: time })),
  startTime: '00:00',
  endTime: '24:00',
  showFitter: false,
  setShowFitter: (show) => set((state) => ({ ...state, showFitter: show })),

  minBeveragePrice: NOT_SPECIFIED,
  maxTime: NOT_SPECIFIED,
  setMinBeveragePrice: (price) => set({ minBeveragePrice: price }),
  setMaxTime: (time) => set({ maxTime: time }),
}));

export const setStartTime = (time: string) => {
  useFilter.getState().setStartTime(time);
};

export const setEndTime = (time: string) => {
  useFilter.getState().setEndTime(time);
};
