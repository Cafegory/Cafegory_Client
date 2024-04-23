import {StoreState,  ApiStoreState} from './ReviewModal.types';
import create from 'zustand';
import axios from 'axios';

export const reviewUseStore = create<StoreState>((set) => ({
  isReviewModalOpen: false,
  toggleReviewModal: () => set((state) => ({ isReviewModalOpen: !state.isReviewModalOpen })),
}));


const accessToken = JSON.parse(localStorage.getItem('accessToken'));

export const reviewApiStore = create<ApiStoreState>((set) => ({
  reviews: [],
  fetchReviews: async () => {
    try {
      const response = await axios.get(`cafe/1/review/list`, {
        headers: {
          Authorization: accessToken,
        },
      });
      set({ reviews: response.data.list });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
  deleteReview: async (reviewId) => {
    try {
      await axios.delete(`/cafe/review/${reviewId}`, {
        headers: {
          Authorization: accessToken,
        },
      });
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  },
}));