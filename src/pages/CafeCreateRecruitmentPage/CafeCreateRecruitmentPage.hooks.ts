import { create } from 'zustand';
import {
  OptionContentList,
  DateTimeCombine,
  OptionState,
  Cafe,
  CafeCreateResruitmentApi,
  CafeInfoApi,
} from './CafeCreateRecruitmentPage.type';
import axios from 'axios';

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

export const cafeInfo = create<Cafe>((set) => ({
  cafeName: '',
  setCafeName: (value) => set({ cafeName: value }),

  cafeId: null,
  setCafeId: (value) => set({ cafeId: value }),

  getCafeInfo: async () => {
    axios
      .get(`/cafe/${cafeInfo.getState().cafeId}`, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        set({ cafeName: response.data.basicInfo.name });
      })
      .catch((error) => {
        console.error(error.response.data.errorMessage);
      });
  },
}));

export const CafeCreateResruitmentApiContent = create<CafeCreateResruitmentApi>(
  (set) => ({
    postCafeCreateResruitment: async () => {
      const sendData = {
        cafeId: cafeInfo.getState().cafeId,
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
      } catch (error) {
        alert(`${error.response.data.errorMessage}`);
      }
    },
  }),
);

export const CafeInfoApiContent = create<CafeInfoApi>((set) => ({
  getCafeInfo: async () => {
    axios
      .get(`/cafe/${cafeInfo.getState().cafeId}`, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        set({ cafeName: response.data.basicInfo.name });
      })
      .catch((error) => {
        console.error(error.response.data.errorMessage);
      });
  },
}));
