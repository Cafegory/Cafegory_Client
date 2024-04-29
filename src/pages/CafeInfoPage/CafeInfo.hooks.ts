import axios from 'axios';
import create from 'zustand';
import { refreashStore } from '../../components/RefreashModal/RefreashModal.hooks';

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
      refreashStore.getState().toggleRefreashModal();
    } catch (error) {
      if (error.response && error.response.status === 401 && accessToken!== null) {
        refreashStore.getState().toggleRefreashModal();
      } else {
        console.error('Error:', error);
      }
    }
  },
}));
