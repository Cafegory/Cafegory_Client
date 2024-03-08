//src\pages\CafeMeetingSearchPage\CafeMeetingSearchPage.type.ts
import create from 'zustand';
export const NOT_SPECIFIED = '무관';
export const CAN_STUDY = '가능';
export const CANNOT_STUDY = '불가능';

export interface FilterState {
  area: string;
  setArea: (keyword: string) => void;
  showFitter: boolean;
  setShowFitter: (show: boolean) => void;
}

interface DatePickerState {
  maxMemberCount: number | null;
  setMaxMemberCount: (count: number | null) => void;
  canTalk: boolean;
  setCanTalk: (canTalk: boolean) => void;
  onlyJoinAble: boolean;
  setOnlyJoinAble: (onlyJoinAble: boolean) => void;
  participation: string;
  setParticipation: (option: string) => void;
}

export const useDatePickerStore = create<DatePickerState>((set) => ({
  maxMemberCount: 0,
  setMaxMemberCount: (count: number | 0) => {
    if (count !== 0 && count >= 1 && Number.isInteger(count)) {
      set({ maxMemberCount: count });
    } else {
      set({ maxMemberCount: 0 });
    }
  },
  canTalk: true,
  setCanTalk: (canTalk: boolean) => set({ canTalk }),
  onlyJoinAble: false,
  setOnlyJoinAble: (onlyJoinAble: boolean) => set({ onlyJoinAble }),
  participation: '',
  setParticipation: (option: string) => set({ participation: option }),
}));
