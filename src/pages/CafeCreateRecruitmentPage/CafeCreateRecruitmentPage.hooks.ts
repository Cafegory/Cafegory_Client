import { create } from 'zustand';
import axios from 'axios';
import {
  OptionContentList,
  DateTimeCombine,
  OptionState,
  Cafe,
  CafeCreateResruitmentApi,
} from './CafeCreateRecruitmentPage.type';

const accessToken = process.env.REACT_APP_ACCESS_TOKEN;

export const OptionContent = create<OptionContentList>((set) => ({
  name: '',
  setName: (value) => set({ name: value }),

  maxMemberCount: 0,
  setMaxMemberCount: (value) => set({ maxMemberCount: value }),

  canTalk: true,
  setCanTalk: (value) => set({ canTalk: value }),

  startTime: 0,
  setStartTime: (value) => set({ startTime: value }),

  endTime: 24,
  setEndTime: (value) => set({ endTime: value }),

  selectedDate: new Date(),
  setSelectedDate: (value) => set({ selectedDate: value }),

  openChatUrl: '',
  setOpenChatUrl: (value) => set({ openChatUrl: value }),
}));

export const DateTime = create<DateTimeCombine>((set) => ({
  startDateTime: 'yyyy-MM-ddThh:mm:ss',
  setStartDateTime: (value) => set({ startDateTime: value }),

  endDateTime: 'yyyy-MM-ddThh:mm:ss',
  setEndDateTime: (value) => set({ endDateTime: value }),
}));

export const useOption = create<OptionState>((set) => ({
  isSelectedCanStudy: 'TRUE',
  setSelectedCanStudy: (value) => set({ isSelectedCanStudy: value }),
}));

export const cafeinfo = create<Cafe>((set) => ({
  cafeName: '',
  setCafeName: (value) => set({ cafeName: value }),

  cafeId: null,
  setCafeId: (value) => set({ cafeId: value }),
}));

export const CafeCreateResruitmentApiContent = create<CafeCreateResruitmentApi>(
  (set) => ({
    postCafeCreateResruitment: async () => {
      const sendData = {
        cafeId: cafeinfo.getState().cafeId,
        name: OptionContent.getState().name,
        startDateTime: DateTime.getState().startDateTime,
        endDateTime: DateTime.getState().endDateTime,
        maxMemberCount: OptionContent.getState().maxMemberCount,
        canTalk: OptionContent.getState().canTalk,
        openChatUrl: OptionContent.getState().openChatUrl,
      };
      try {
        const response = await axios.post('/study/once', sendData, {
          headers: {
            Authorization: accessToken,
          },
        });
        console.log('요청 성공');
        console.log('응답 데이터:', response.data);
      } catch (error) {
        alert(`${error.response.data.errorMessage}`);
      }
    },
  }),
);
