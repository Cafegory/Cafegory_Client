import create from 'zustand';
import { RatingState, ContentState } from './WriteReviewPage.type';


export const useRatingStore = create<RatingState>((set) => ({
  rating: 0,
  setRating: (newRating) => set({ rating: newRating }), 
}));

export const useContentStore = create<ContentState>((set) => ({
    content: "", 
    setContent: (newContent) => set({ content: newContent }),
  }));