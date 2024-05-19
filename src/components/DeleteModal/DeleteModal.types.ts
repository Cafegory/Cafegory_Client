export default interface StoreState {
    isDeleteModalOpen: boolean;
    toggleDeleteModal: () => void;
    reviewId: number;
    setReviewId: (reviewId: number) => void;
  }