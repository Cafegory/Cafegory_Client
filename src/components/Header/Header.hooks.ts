import { useUser } from '../../store/users/store';
import { UserState } from './Header.types';

export const useHeader = () => {
  return useUser((state: UserState) => state.isLoggedIn);
};

