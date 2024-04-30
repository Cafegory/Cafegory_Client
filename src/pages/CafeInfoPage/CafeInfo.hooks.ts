import axios from 'axios';
import create from 'zustand';
import { tokenRefresh } from '../../components/RefreshModal/RefreshModal.hooks';
import { useUser } from '../../store/users/store';

const accessToken = JSON.parse(localStorage.getItem('accessToken'));


export const cafeInfoApiStore = create((set) => ({
  info: {
    basicInfo: {
      name: '',
      address: '',
      isOpen: false,
      businessHours: [],
      sns: [],
      phone: '',
      avgReviewRate: 0,
    },
    reviews: [],
    meetings: [],
  },
  fetchInfo: async (cafeId) => {
   
    try {
      const response = await axios.get(`/cafe/${cafeId}`, {
        headers: {
          Authorization: accessToken,
        },
      });
      set({ info: response.data });
    } catch (error) {
      const isLoggedIn = useUser.getState().isLoggedIn;
      tokenRefresh(error, isLoggedIn); 
    }
  },
}));
