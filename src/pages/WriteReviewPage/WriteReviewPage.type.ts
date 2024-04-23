export interface RatingState {
    rating: number;
    setRating: (value: number) => void;
  }

export interface ContentState {
    content: string;
    setContent: (value: string ) => void;
  }

  export interface ReviewEditState {
    isEditing: boolean;
    toggleEditing: (value: boolean) => void;
    editReviewId:number;
    getReviewId: (value: number) => void;
  }