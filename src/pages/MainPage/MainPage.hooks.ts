import create from 'zustand';

export interface FilterState {
  selectedOption: string;
  studyAvailability: '가능' | '불가능';
  drinkPrice: string;
  maxUsageTime: string;
  searchKeyword: string;
  setStudyAvailability: (availability: '가능' | '불가능') => void;
  setDrinkPrice: (price: string) => void;
  setMaxUsageTime: (time: string) => void;
  setSearchKeyword: (keyword: string) => void;
  setStartTime: (time: string) => void;
  setEndTime: (time: string) => void;
  startTime: string;
  endTime: string;
  showFitter: boolean;
  setShowFitter: (show: boolean) => void;
}

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
