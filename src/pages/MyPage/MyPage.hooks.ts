import { ApiStoreState } from './MyPage.type';
import create from 'zustand';
import axios from 'axios';
import { tokenRefresh } from '../../components/RefreshModal/RefreshModal.hooks';
import { useUser } from '../../store/users/store';

export const profileApiStore = create<ApiStoreState>((set) => ({
  name: '',
  introduction: '',
  thumbnailingImg: '',
  setName: (newName) => set({ name: newName }),
  setIntroduction: (newIntroduction) => set({ introduction: newIntroduction }),
  setThumbnailingImg: (newImg) => set({ thumbnailingImg: newImg }),

  fetchProfile: () => {
    const accessToken = JSON.parse(localStorage.getItem('accessToken'));
    const memberId = localStorage.getItem('memberId');

    return axios
      .get(`https://cafegory.robinjoon.xyz/profile/${memberId}`, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        set({ name: response.data.name });
        set({ introduction: response.data.introduction });
        set({ thumbnailingImg: response.data.thumbnailImg });
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        const isLoggedIn = useUser.getState().isLoggedIn;
        tokenRefresh(error, isLoggedIn);
      });
  },

  patchProfile: async () => {
    const accessToken = JSON.parse(localStorage.getItem('accessToken'));
    const memberId = localStorage.getItem('memberId');

    const profileData = {
      name: profileApiStore.getState().name,
      introduction: profileApiStore.getState().introduction,
    };
    try {
      await axios.patch(
        `https://cafegory.robinjoon.xyz/profile/${memberId}`,
        profileData,
        {
          headers: {
            Authorization: accessToken,
          },
        },
      );
      localStorage.setItem('userName', profileApiStore.getState().name);
    } catch (error) {
      console.log('수정 에러');
      const isLoggedIn = useUser.getState().isLoggedIn;
      tokenRefresh(error, isLoggedIn);
    }
  },
}));
