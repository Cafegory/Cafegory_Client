import { useUser } from '../../store/store';
import { UserState } from './Header.type';

export const useHeader = () => {
  return useUser((state: UserState) => state.isLoggedIn);
};
