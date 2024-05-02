import { ApiStoreState } from './MyPage.type';
import create from 'zustand';
import axios from 'axios';
import { tokenRefresh } from '../../components/RefreshModal/RefreshModal.hooks';
import { useUser } from '../../store/users/store';

const accessToken = JSON.parse(localStorage.getItem('accessToken'));
const memberId = JSON.parse(localStorage.getItem('memberId'));

export const profileApiStore = create<ApiStoreState>((set) => ({
  name: '',
  introduction: '',
  thumbnailingImg: '',
  setName: (newName) => set({ name: newName }),
  setIntroduction: (newIntroduction) => set({ introduction: newIntroduction }),
  setThumbnailingImg: (newImg) => set({ thumbnailingImg: newImg }),

  fetchProfile: async () => {
    try {
      const response = await axios.get(`https://cafegory.robinjoon.xyz/profile/${memberId}`, {
        headers: {
          Authorization:accessToken,
        },
      });
      set({ name: response.data.name });
      set({ introduction: response.data.introduction });
      set({ thumbnailingImg: response.data.thumbnailImg });
    } catch (error) {
      const isLoggedIn = useUser.getState().isLoggedIn;
      tokenRefresh(error, isLoggedIn); 
    }
  },
  patchProfile: async () => {
    const profileData = {
      name: profileApiStore.getState().name,
      introduction: profileApiStore.getState().introduction,
    };
    try {
      await axios.patch(`https://cafegory.robinjoon.xyz/profile/${memberId}`, profileData, {
        headers: {
          Authorization: accessToken,
        },
      });
    } catch (error) {
      const isLoggedIn = useUser.getState().isLoggedIn;
      tokenRefresh(error, isLoggedIn); 
    }
  },
}));
