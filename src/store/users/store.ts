import create from 'zustand';

export interface UserState {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

export const useUser = create<UserState>((set) => ({
  isLoggedIn: sessionStorage.getItem('isLoggedIn') === 'true',
  setIsLoggedIn: (value) => {
    set({ isLoggedIn: value });
    sessionStorage.setItem('isLoggedIn', String(value));
  },
}));
