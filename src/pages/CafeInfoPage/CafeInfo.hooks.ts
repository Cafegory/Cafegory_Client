import axios from 'axios';
import create from 'zustand';

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
  fetchInfo: async () => {
    try {
      const response = await axios.get(`/cafe/1`, {
        headers: {
          Authorization: accessToken,
        },
      });
      set({ info: response.data });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
}));
