import { create } from 'zustand';

import {
  OptionContentList,
  DateTimeCombine,
} from './CafeCreateRecruitmentPage.type';

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
  starDateTime: 'yyyy-MM-ddThh:mm:ss',
  setStarDateTime: (value) => set({ starDateTime: value }),

  endDateTime: 'yyyy-MM-ddThh:mm:ss',
  setEndDateTime: (value) => set({ endDateTime: value }),
}));
