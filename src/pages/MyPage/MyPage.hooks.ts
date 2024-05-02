import { ApiStoreState } from './MyPage.type';
import create from 'zustand';
import axios from 'axios';
import { tokenRefresh } from '../../components/RefreshModal/RefreshModal.hooks';
import { useUser } from '../../store/users/store';

const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

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
    const URL = `${PROXY}/profile/${memberId}`;

    return axios
      .get(URL, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        set({ name: response.data.name });
        set({ introduction: response.data.introduction });
        set({ thumbnailingImg: response.data.thumbnailImg });
        console.log(response);
        console.log('hi');
      })
      .catch((error) => {
        console.log(error);
        console.log('에러?');
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
    } catch (error) {
      console.log('수정 에러');
      const isLoggedIn = useUser.getState().isLoggedIn;
      tokenRefresh(error, isLoggedIn);
    }
  },
}));
