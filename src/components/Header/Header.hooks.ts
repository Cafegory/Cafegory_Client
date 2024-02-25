import { useStore } from '../../store/store';
import { StoreState } from './Header.type';

export const useHeader = () => {
  return useStore((state: StoreState) => state.isLogged);
};
