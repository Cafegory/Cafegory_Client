import { create } from 'zustand';
import { Question, Answer } from './CafeMeetingInfoPage.type';

export const createQuestion = create<Question>((set) => ({
  question: '',
  setQuestion: (value) => set({ question: value }),
}));

export const createAnswer = create<Answer>((set) => ({
  answer: '',
  setAnswer: (value) => set({ answer: value }),
}));
