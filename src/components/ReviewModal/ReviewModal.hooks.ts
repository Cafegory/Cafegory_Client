import {StoreState} from './ReviewModal.types';
import {ApiStoreState} from './ReviewModal.types';
import create from 'zustand';
import axios from 'axios';

export const reviewUseStore = create<StoreState>((set) => ({
  isReviewModalOpen: false,
  toggleReviewModal: () => set((state) => ({ isReviewModalOpen: !state.isReviewModalOpen })),
}));

const apiUrl = 'http://52.78.210.204/cafe/1/review/list';
const accessToken = JSON.parse(localStorage.getItem('accessToken'));

export const reviewApiStore = create<ApiStoreState>((set) => ({
  reviews: [],
  fetchReviews: async () => {
    try {
      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      set({ reviews: response.data.list });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
}));