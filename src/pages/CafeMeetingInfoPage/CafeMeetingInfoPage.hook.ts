import { create } from 'zustand';
import { Question, Answer } from './CafeMeetingInfoPage.type';
import axios from 'axios';
import {ApiStoreState , qnaStoreState , QuestionStoreState, AnswerStoreState} from './CafeMeetingInfoPage.type';

export const createQuestion = create<Question>((set) => ({
  question: '',
  setQuestion: (value) => set({ question: value }),
}));

export const createAnswer = create<Answer>((set) => ({
  answer: '',
  setAnswer: (value) => set({ answer: value }),
}));


const accessToken = JSON.parse(localStorage.getItem('accessToken'));

export const cafeMeetingInfoApiStore = create<ApiStoreState>((set) => ({
  info: {
    cafeId: 0,
    creatorId:0,
    cafeName: "",
    area: "",
    studyOnceId: 0,
    name: "",
    startDateTime: "",
    endDateTime: "",
    maxMemberCount: 0,
    nowMemberCount: 0,
    canTalk: false,
    canJoin: false,
    isEnd: false,
    attendance:false,
    openChatUrl:""
  },
  fetchInfo: async (studyOnceId) => {
    try {
      const response = await axios.get(`/study/once/${studyOnceId}`, {
        headers: {
          Authorization: accessToken,
        },
      });
      set({ info: response.data });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
}));

export const qnaApiStore = create<qnaStoreState>((set) => ({
  qna: {
    replyWriter : {
      memberId : 0,
      name : "",
      thumbnailImg : "",
    },
    comments : [
      {
        questionWriter : {
            memberId : 0,
            name : "",
            thumbnailImg : ""
        },
        questionInfo : {
            commentId : 0,
            comment : ""
        },
        replies : [ 
          {
            replyInfo : {
              commentId : 0,
              comment : ""
            } 
          }
        ]
      }, 
    ]
  },
  fetchQna: async (studyOnceId) => {
    try {
      const response = await axios.get(`/study/once/${studyOnceId}/comment/list`, {
        headers: {
          Authorization: accessToken,
        },
      });
      set({ qna: response.data });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
}));

export const questionApiStore = create<QuestionStoreState>((set) => ({
  questionContent: "",
  setQuestionContent: (newContent) => set({ questionContent: newContent }),

  postQuestion: async (studyOnceId) => {
    const data = {content: questionApiStore.getState().questionContent}
    try {
      await axios.post(`/study/once/${studyOnceId}/question`,data, {
        headers: {
          Authorization: accessToken,
        },
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },

  deleteQuestion: async (commentId) => {
    try {
      await axios.delete(`/study/once/question/${commentId}`, {
        headers: {
          Authorization: accessToken,
        },
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
}));

export const answerApiStore = create<AnswerStoreState>((set) => ({
  answerContent: "",
  setAnswerContent: (newContent) => set({ answerContent: newContent }),

  postAnswer: async (studyOnceId, parentCommentId) => {
    const data = {content: answerApiStore.getState().answerContent}
    try {
      await axios.post(`/study/once/${studyOnceId}/question/${parentCommentId}/reply`,data, {
        headers: {
          Authorization: accessToken,
        },
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },

  deleteAnswer: async (commentId) => {
    try {
      await axios.delete(`/study/once/reply/${commentId}`, {
        headers: {
          Authorization: accessToken,
        },
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
}));

export const joinApiStore = create(() => ({
  cancelJoin: async (studyOnceId) => {
    try {
      await axios.delete(`/study/once/${studyOnceId}`, {
        headers: {
          Authorization: accessToken,
        },
      });
      alert('참여가 취소되었습니다ㅠㅠ')
      window.location.reload();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
}));