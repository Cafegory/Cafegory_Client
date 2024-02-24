import create from 'zustand';

interface StoreState {
  isLoggined: boolean;
}

export const useStore = create<StoreState>((set) => ({
  isLoggined: false,
}));
