import { create } from 'zustand';

import {
  OptionContentList,
  DateTimeCombine,
  MemberList,
  OptionState,
} from './CafeRecruitmentModifyPage.type';

export const OptionContent = create<OptionContentList>((set) => ({
  name: '',
  setName: (value) => set({ name: value }),

  maxMemberCount: 0,
  setMaxMemberCount: (value) => set({ maxMemberCount: value }),

  canTalk: true,
  setCanTalk: (value) => set({ canTalk: value }),

  startTime: 0,
  setStartTime: (value) => set({ startTime: value }),

  endTime: 24,
  setEndTime: (value) => set({ endTime: value }),

  selectedDate: new Date(),
  setSelectedDate: (value) => set({ selectedDate: value }),
}));

export const DateTime = create<DateTimeCombine>((set) => ({
  startDateTime: 'yyyy-MM-ddThh:mm:ss',
  setStartDateTime: (value) => set({ startDateTime: value }),

  endDateTime: 'yyyy-MM-ddThh:mm:ss',
  setEndDateTime: (value) => set({ endDateTime: value }),
}));

export const Member = create<MemberList>((set) => ({
  memberName: '',
  setMemberName: (value) => set({ memberName: value }),

  thumbnailImg: '',
  setThumbnailImg: (value) => set({ thumbnailImg: value }),
}));

export const useOption = create<OptionState>((set) => ({
  isSelectedCanStudy: 'TRUE',
  setSelectedCanStudy: (value) => set({ isSelectedCanStudy: value }),
}));
