//store.ts
import create from 'zustand';

export interface FilterState {
  selectedOption: string;
  setSelectedOption: (option: string) => void;
}

export const useFilter = create<FilterState>((set) => ({
  selectedOption: '',
  setSelectedOption: (option: string) => set({ selectedOption: option }),
}));
