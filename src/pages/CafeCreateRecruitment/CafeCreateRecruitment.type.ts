import create from 'zustand';

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
}));
