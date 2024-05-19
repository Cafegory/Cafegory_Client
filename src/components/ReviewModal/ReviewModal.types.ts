export interface StoreState {
    isReviewModalOpen: boolean;
    toggleReviewModal: () => void;
  }

export interface ApiStoreState {
    reviews: any[];
    fetchReviews: (cafeId:number, page: number, pageSize: number) => Promise<void>;
    deleteReview: (reviewId: number) => Promise<void>;
  }