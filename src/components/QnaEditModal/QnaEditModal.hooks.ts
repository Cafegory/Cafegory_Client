import { StoreState } from './QnaEditModal.types';
import { QnaEditApiStore } from './QnaEditModal.types';
import create from 'zustand';
import axios from 'axios';
import { tokenRefresh } from '../RefreshModal/RefreshModal.hooks';
import { useUser } from '../../store/users/store';

const accessToken = JSON.parse(localStorage.getItem('accessToken'));

export const QnaEditModalStore = create<StoreState>((set) => ({
  isModalOpen: false,
  toggleModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
}));


export const QnaEditApiState = create<QnaEditApiStore>((set) => ({
    editContent: "",
    commentId:0,
    isQuestion:false,
    setEditContent: (newContent) => set({ editContent: newContent }),
    setCommentId: (newContent) => set({ commentId: newContent }),
    setIsQuestion: (newContent) => set({ isQuestion: newContent }),

    patchQuestion: async () => {
        const commentId = QnaEditApiState.getState().commentId
        const questionData = {
            content:QnaEditApiState.getState().editContent
        }

        try {
          await axios.patch(`/study/once/question/${commentId}`,questionData,{
            headers: {
              Authorization: accessToken,
            },
          });
        } catch (error) {
          const isLoggedIn = useUser.getState().isLoggedIn;
          tokenRefresh(error, isLoggedIn); 
        }
      },

    patchAnswer: async () => {
        const answerData = {content:QnaEditApiState.getState().editContent}
        const commentId = QnaEditApiState.getState().commentId

        try {
          await axios.patch(`/study/once/reply/${commentId}`,answerData,{
            headers: {
              Authorization: accessToken,
            },
          });
        } catch (error) {
          const isLoggedIn = useUser.getState().isLoggedIn;
          tokenRefresh(error, isLoggedIn); 
        }
      },
  }));
