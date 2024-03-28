import create from 'zustand';
import { RatingState } from './WriteReviewPage.type';


export const useRatingStore = create<RatingState>((set) => ({
  rating: 0,
  setRating: (newRating) => set({ rating: newRating }), 
}));