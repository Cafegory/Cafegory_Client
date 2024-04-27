export interface StoreState {
    isModalOpen: boolean;
    toggleModal: () => void;
  }

export interface QnaEditApiStore {
    patchQuestion: () => Promise<void>;
    patchAnswer: () => Promise<void>;
    editContent:string;
    commentId:number;
    isQuestion:boolean;
     setEditContent: (newIntroduction: string) => void;
     setCommentId:(newCommentId:number)=>void;
     setIsQuestion:(newIsQuestion:boolean)=>void;
    
}