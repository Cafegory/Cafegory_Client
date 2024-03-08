import create from 'zustand';
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

interface DatePickerState {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
  name: string;
  setName: (name: string) => void;
  maxMemberCount: number | null;
  setMaxMemberCount: (count: number | null) => void;
  canTalk: boolean;
  setCanTalk: (canTalk: boolean) => void;
  startTime: string;
  setStartTime: (time: string) => void;
  endTime: string;
  setEndTime: (time: string) => void;
  onlyJoinAble: boolean; // 새로운 속성 추가
  setOnlyJoinAble: (onlyJoinAble: boolean) => void; // 새로운 속성 추가
}

export const useDatePickerStore = create<DatePickerState>((set) => ({
  selectedDate: new Date(),
  setSelectedDate: (date: Date) => set({ selectedDate: date }),
  name: '',
  setName: (name: string) => set({ name }),
  maxMemberCount: null,
  setMaxMemberCount: (count: number | null) => {
    if (count !== null && count >= 1 && Number.isInteger(count)) {
      set({ maxMemberCount: count });
    } else {
      set({ maxMemberCount: null });
    }
  },
  canTalk: true,
  setCanTalk: (canTalk: boolean) => set({ canTalk }),
  startTime: '00:00',
  setStartTime: (time: string) => set({ startTime: time }),
  endTime: '00:00',
  setEndTime: (time: string) => set({ endTime: time }),
  onlyJoinAble: false, // Adding the missing property
  setOnlyJoinAble: (onlyJoinAble: boolean) => set({ onlyJoinAble }),
}));
