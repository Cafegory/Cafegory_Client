import create from 'zustand';

export interface StoreState {
  isLogged: boolean;
}

export const useStore = create<StoreState>((set) => ({
  isLogged: false,
}));
