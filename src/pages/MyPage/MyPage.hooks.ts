
import {ApiStoreState} from './MyPage.type';
import create from 'zustand';
import axios from 'axios';

const accessToken = JSON.parse(localStorage.getItem('accessToken'));
const memberId = JSON.parse(localStorage.getItem('memberId'));

export const profileApiStore = create<ApiStoreState>((set) => ({
  profile: [],
  fetchProfile: async () => {
    try {
      const response = await axios.get(`/profile/${memberId}`, {
        headers: {
          Authorization: accessToken,
        },
      });
      set({ profile: response.data});
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
}));