import create from 'zustand';
import { NameState } from './MyPageEdit.type';

const api = {
    name: '짱구',
    thumbnailImg: 'https://~~',
    introduction: '안녕하세요 짱구에요 ',
  };

export const useNameStore = create<NameState>((set) => ({
    name: api.name, 
    setName: (newName) => set({ name: newName }),
  }));