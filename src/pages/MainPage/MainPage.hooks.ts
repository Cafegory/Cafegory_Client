// MainPage.hooks.ts
import create from 'zustand';

export interface FilterState {
  selectedOption: string;
  studyAvailability: '가능' | '불가능';
  drinkPrice: string;
  maxUsageTime: string;
  searchKeyword: string; // 새로운 검색어 상태 추가
  setStudyAvailability: (availability: '가능' | '불가능') => void;
  setDrinkPrice: (price: string) => void;
  setMaxUsageTime: (time: string) => void;
  setSearchKeyword: (keyword: string) => void; // 검색어 상태를 업데이트하는 함수 추가
}

export const useFilter = create<FilterState>((set) => ({
  selectedOption: '',
  studyAvailability: '가능',
  drinkPrice: '무관',
  maxUsageTime: '무관',
  searchKeyword: '', // 초기 검색어 상태는 빈 문자열로 설정
  setStudyAvailability: (availability) =>
    set((state) => ({ ...state, studyAvailability: availability })),
  setDrinkPrice: (price) => set((state) => ({ ...state, drinkPrice: price })),
  setMaxUsageTime: (time) => set((state) => ({ ...state, maxUsageTime: time })),
  setSearchKeyword: (keyword) =>
    set((state) => ({ ...state, searchKeyword: keyword })), // 검색어 상태 업데이트 함수 추가
}));
