export interface StoreState {
    isModalOpen: boolean;
    toggleModal: () => void;
  }

export interface QnaEditApiStore {
    editContent:string;
     setEditContent: (newIntroduction: string) => void;
}