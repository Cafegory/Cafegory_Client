export const NOT_SPECIFIED = '무관';
export const CAN_STUDY = '가능';
export const CANNOT_STUDY = '불가능';

export interface FilterState {
  selectedOption: string;
  canStudy: typeof CAN_STUDY | typeof CANNOT_STUDY | null;
  drinkPrice: string;
  maxUsageTime: string;
  area: string;
  setCanStudy: (availability: typeof CAN_STUDY | typeof CANNOT_STUDY) => void;
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

export const drinkPrices = [
  NOT_SPECIFIED,
  '1,000원',
  '2,000원',
  '3,000원',
  '4,000원',
  '5,000원',
  '10,000원 이상',
] as const;

export const usageTimes = [
  NOT_SPECIFIED,
  '1시간',
  '2시간',
  '3시간',
  '4시간',
  '5시간',
  '6시간 이상',
] as const;
