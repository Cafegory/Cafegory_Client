import { create } from 'zustand';
import {
  FilterState,
  UpdateFilterContent,
  SearchContent,
  OptionState,
  PageState,
  DateTimeCombine,
} from './CafeMeetingSearchResultPage.type';

export const useFilter = create<FilterState>((set) => ({
  showFitter: false,
  setShowFitter: (show) => set((state) => ({ ...state, showFitter: show })),
}));

export const updateContent = create<UpdateFilterContent>((set) => ({
  onlyJoinAble: true,
  setOnlyJoinAble: (value) => set({ onlyJoinAble: value }),

  onlyJoinAbleState: true,
  setOnlyJoinAbleState: (value) => set({ onlyJoinAbleState: value }),

  maxMemberCount: 0,
  setMaxMemberCount: (value) => set({ maxMemberCount: value }),

  maxMemberCountState: 0,
  setMaxMemberCountState: (value) => set({ maxMemberCountState: value }),

  canTalk: 'BOTH',
  setCanTalk: (value) => set({ canTalk: value }),

  canTalkState: 'BOTH',
  setCanTalkState: (value) => set({ canTalkState: value }),
}));

export const search = create<SearchContent>((set) => ({
  area: '',
  setArea: (value) => set({ area: value }),
}));

export const useOption = create<OptionState>((set) => ({
  isSelectedOnlyJoinAble: null,
  setSelectedOptionOnlyJoinAble: (value) =>
    set({ isSelectedOnlyJoinAble: value }),

  isSelecteCanTalk: null,
  setSelectedCanTalk: (value) => set({ isSelecteCanTalk: value }),
}));

export const usePage = create<PageState>((set) => ({
  nowPage: 0,
  setNowPage: (value) => set({ nowPage: value }),

  maxPage: 0,
  setMaxPage: (value) => set({ maxPage: value }),

  pageSize: 0,
  setPageSize: (value) => set({ pageSize: value }),
}));

export const DateTime = create<DateTimeCombine>((set) => ({
  startDateTime: 'yyyy-MM-ddThh:mm:ss',
  setStartDateTime: (value) => set({ startDateTime: value }),

  endDateTime: 'yyyy-MM-ddThh:mm:ss',
  setEndDateTime: (value) => set({ endDateTime: value }),
}));
