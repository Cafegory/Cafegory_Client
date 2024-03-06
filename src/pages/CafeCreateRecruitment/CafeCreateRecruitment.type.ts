// CafeCreateRecruitment.type.ts
import create from 'zustand';

interface DatePickerState {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
}

export const useDatePickerStore = create<DatePickerState>((set) => ({
  selectedDate: new Date(),
  setSelectedDate: (date: Date) => set({ selectedDate: date }),
}));
