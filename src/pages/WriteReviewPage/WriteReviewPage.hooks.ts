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


const apiUrl = '/cafe/1/review';
const accessToken =JSON.parse(localStorage.getItem('accessToken'));




export const postReview = async () => {
  const reviewData = {
    content: useContentStore.getState().content,
    rate: useRatingStore.getState().rating
  };

  try {
    const response = await axios.post(apiUrl, reviewData, {
      headers: {
        Authorization: accessToken,
      }
    });
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error);
  }
}
