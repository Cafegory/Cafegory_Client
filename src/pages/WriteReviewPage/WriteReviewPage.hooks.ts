import create from 'zustand';
import { RatingState, ContentState, ReviewEditState } from './WriteReviewPage.type';
import axios from 'axios';

export const ReviewEditStore = create<ReviewEditState>((set) => ({
  isEditing: false,
  toggleEditing: () => set((state) => ({ isEditing: !state.isEditing })),
  editReviewId : 0,
  getReviewId :  (id) => set({ editReviewId:id }),
}));


export const useRatingStore = create<RatingState>((set) => ({
  rating: 0,
  setRating: (newRating) => set({ rating: newRating }), 
}));

export const useContentStore = create<ContentState>((set) => ({
    content: "", 
    setContent: (newContent) => set({ content: newContent }),
  }));

const accessToken =JSON.parse(localStorage.getItem('accessToken'));

export const postReview = async (cafeId) => {
  const reviewData = {
    content: useContentStore.getState().content,
    rate: useRatingStore.getState().rating
  };

  try {
    await axios.post(`https://cafegory.robinjoon.xyz/cafe/${cafeId}/review`, reviewData, {
      headers: {
        Authorization: accessToken,
      }
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

export const patchReview = async () => {
  const reviewData = {
    content: useContentStore.getState().content,
    rate: useRatingStore.getState().rating
  };
  
  try {
    const id = ReviewEditStore.getState().editReviewId;
    await axios.patch(`https://cafegory.robinjoon.xyz/cafe/review/${id}`,reviewData, {
      headers: {
        Authorization: accessToken,
      }
    });
  } catch (error) {
    console.error('Error:', error);
  }
}
