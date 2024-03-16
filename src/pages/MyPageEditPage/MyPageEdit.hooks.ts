import create from 'zustand';
import { NameState, IntroductionState } from './MyPageEdit.type';

const api = {
    name: '짱구',
    thumbnailImg: 'https://~~',
    introduction: '안녕하세요 짱구에요 ',
  };

export const useNameStore = create<NameState>((set) => ({
    name: api.name, 
    setName: (newName) => set({ name: newName }),
  }));

  export const useIntroductionStore = create<IntroductionState>((set) => ({
    introduction: api.introduction, 
    setIntroduction: (newIntroduction) => set({ introduction: newIntroduction }),
  }));