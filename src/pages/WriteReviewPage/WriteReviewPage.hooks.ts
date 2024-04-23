import create from 'zustand';
import { RatingState, ContentState } from './WriteReviewPage.type';
import axios from 'axios';

export const useRatingStore = create<RatingState>((set) => ({
  rating: 0,
  setRating: (newRating) => set({ rating: newRating }), 
}));

export const useContentStore = create<ContentState>((set) => ({
    content: "", 
    setContent: (newContent) => set({ content: newContent }),
  }));


const apiUrl = 'http://52.78.210.204/cafe/1/review';
const accessToken =JSON.parse(localStorage.getItem('accessToken'));

const reviewData = {
  content: useContentStore.getState().content,
  rate: useRatingStore.getState().rating
};


export const postReview = async () => {
  try {
    const response = await axios.post(apiUrl, reviewData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      }
    });
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error);
  }
}
