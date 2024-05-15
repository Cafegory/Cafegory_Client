import { create } from 'zustand';
import {
  FilterState,
  UpdateFilterContent,
  SearchContent,
  OptionState,
  DetailModalState,
  PageState,
} from './CafeSearchResultPage.type';

export const useFilter = create<FilterState>((set) => ({
  showFitter: false,
  setShowFitter: (show) => set((state) => ({ ...state, showFitter: show })),
}));

export const updateContent = create<UpdateFilterContent>((set) => ({
  canStudy: true,
  setCanStudy: (value) => set({ canStudy: value }),

  canStudyState: true,
  setCanStudyState: (value) => set({ canStudyState: value }),

  startTime: 0,
  setStartTime: (value) => set({ startTime: value }),

  startTimeState: 0,
  setStartTimeState: (value) => set({ startTimeState: value }),

  endTime: 24,
  setEndTime: (value) => set({ endTime: value }),

  endTimeState: 24,
  setEndTimeState: (value) => set({ endTimeState: value }),

  minBeveragePrice: 0,
  setMinBeveragePrice: (value) => set({ minBeveragePrice: value }),

  minBeveragePriceState: 0,
  setMinBeveragePriceState: (value) => set({ minBeveragePriceState: value }),

  maxTime: 0,
  setMaxTime: (value) => set({ maxTime: value }),

  maxTimeState: 0,
  setMaxTimeState: (value) => set({ maxTimeState: value }),
}));

export const search = create<SearchContent>((set) => ({
  area: '',
  setArea: (value) => set({ area: value }),
}));

export const useOption = create<OptionState>((set) => ({
  isSelectedCanStudy: 'TRUE',
  setSelectedCanStudy: (value) => set({ isSelectedCanStudy: value }),

  isSelectedMinBeveragePrice: 0,
  setSelectedMinBeveragePrice: (value) =>
    set({ isSelectedMinBeveragePrice: value }),

  isSelectedMaxTime: 0,
  setSelectedMaxTime: (value) => set({ isSelectedMaxTime: value }),
}));

export const useDetailModalStates = create<DetailModalState>((set) => ({
  adressModalState: Array(0).fill(false),
  setAdressModalState: (value) => set({ adressModalState: value }),

  businessHourModalState: Array(0).fill(false),
  setBusinessHourModalState: (value) => set({ businessHourModalState: value }),

  addresses: Array(0).fill(''),
  setAddresses: (value) => set({ addresses: value }),
}));

export const usePage = create<PageState>((set) => ({
  nowPage: 1,
  setNowPage: (value) => set({ nowPage: value }),

  maxPage: 0,
  setMaxPage: (value) => set({ maxPage: value }),

  pageSize: 0,
  setPageSize: (value) => set({ pageSize: value }),
}));
