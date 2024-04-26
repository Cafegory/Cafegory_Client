import { create } from 'zustand';

import {
  OptionContentList,
  DateTimeCombine,
  CafeChangeState,
  MemberInfo,
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

  openChatUrl: '',
  setOpenChatUrl: (value) => set({ openChatUrl: value }),
}));

export const DateTime = create<DateTimeCombine>((set) => ({
  startDateTime: 'yyyy-MM-ddThh:mm:ss',
  setStartDateTime: (value) => set({ startDateTime: value }),

  endDateTime: 'yyyy-MM-ddThh:mm:ss',
  setEndDateTime: (value) => set({ endDateTime: value }),
}));

export const cafeChange = create<CafeChangeState>((set) => ({
  showCafeSearch: false,
  setShowCafeSearch: (value) => set({ showCafeSearch: value }),
}));

export const member = create<MemberInfo>((set) => ({
  creatorId: 1,
  setCreatorId: (value) => set({ creatorId: value }),
}));
