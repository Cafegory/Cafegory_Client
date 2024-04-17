export interface StoreState {
    isReviewModalOpen: boolean;
    toggleReviewModal: () => void;
  }

export interface ApiStoreState {
    reviews: any[];
    fetchReviews: () => Promise<void>;
  }