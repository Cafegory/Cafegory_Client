export interface FilterState {
  selectedOption: string;
  canStudy: '가능' | '불가능' | null;
  drinkPrice: string;
  maxUsageTime: string;
  area: string;
  setCanStudy: (availability: '가능' | '불가능') => void;
  setDrinkPrice: (price: string) => void;
  setMaxUsageTime: (time: string) => void;
  setArea: (keyword: string) => void;
  setStartTime: (time: string) => void;
  setEndTime: (time: string) => void;
  startTime: string;
  endTime: string;
  showFitter: boolean;
  setShowFitter: (show: boolean) => void;

  minBeveragePrice: string;
  maxTime: string;
  setMinBeveragePrice: (price: string) => void;
  setMaxTime: (time: string) => void;
}

export const drinkPrices: string[] = [
  '무관',
  '1,000원',
  '2,000원',
  '3,000원',
  '4,000원',
  '5,000원',
  '10,000원 이상',
];

export const usageTimes: string[] = [
  '무관',
  '1시간',
  '2시간',
  '3시간',
  '4시간',
  '5시간',
  '6시간 이상',
];
