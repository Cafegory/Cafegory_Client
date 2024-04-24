import { create } from 'zustand';
import { Question, Answer } from './CafeMeetingInfoPage.type';
import axios from 'axios';
import { ApiStoreState } from './CafeMeetingInfoPage.type';

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
    isEnd: false
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