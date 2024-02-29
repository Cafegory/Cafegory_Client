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
