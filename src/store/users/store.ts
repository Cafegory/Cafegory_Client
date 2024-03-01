//stroe.ts
import create from 'zustand';

export interface UserState {
  isLoggedIn: boolean;
}

export const useUser = create<UserState>((set) => ({
  isLoggedIn: false,
}));
