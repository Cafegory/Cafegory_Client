import {StoreState,  ApiStoreState} from './ReviewModal.types';
import create from 'zustand';
import axios from 'axios';
import { tokenRefresh } from '../RefreshModal/RefreshModal.hooks';
import { useUser } from '../../store/users/store';

export const reviewUseStore = create<StoreState>((set) => ({
  isReviewModalOpen: false,
  toggleReviewModal: () => set((state) => ({ isReviewModalOpen: !state.isReviewModalOpen })),
}));


const accessToken = JSON.parse(localStorage.getItem('accessToken'));

export const reviewApiStore = create<ApiStoreState>((set) => ({
  reviews: [],
  fetchReviews: async (cafeId) => {
    try {
      const response = await axios.get(`https://cafegory.robinjoon.xyz/cafe/${cafeId}/review/list`, {
        headers: {
          Authorization: accessToken,
        },
      });
      set({ reviews: response.data.list });
    } catch (error) {
      const isLoggedIn = useUser.getState().isLoggedIn;
      tokenRefresh(error, isLoggedIn); 
    }
  },
  deleteReview: async (reviewId) => {
    try {
      await axios.delete(`https://cafegory.robinjoon.xyz/cafe/review/${reviewId}`, {
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