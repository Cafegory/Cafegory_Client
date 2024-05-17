import { create } from 'zustand';
import {
  OptionContentList,
  DateTimeCombine,
  OptionState,
  Cafe,
  CafeCreateResruitmentApi,
} from './CafeCreateRecruitmentPage.type';
import axios from 'axios';
import { tokenRefresh } from '../../components/RefreshModal/RefreshModal.hooks';
import { useUser } from '../../store/users/store';

const accessToken = JSON.parse(localStorage.getItem('accessToken'));

export const OptionContent = create<OptionContentList>((set) => ({
  name: '',
  setName: (value) => set({ name: value }),

  maxMemberCount: 1,
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
      .get(
        `https://cafegory.robinjoon.xyz/cafe/${cafeInfo.getState().cafeId}`,
        {
          headers: {
            Authorization: accessToken,
          },
        },
      )
      .then((response) => {
        set({ cafeName: response.data.basicInfo.name });
      })
      .catch((error) => {
        const isLoggedIn = useUser.getState().isLoggedIn;
        tokenRefresh(error, isLoggedIn);
      });
  },
}));

export const CafeCreateResruitmentApiContent = create<CafeCreateResruitmentApi>(
  (set) => ({
    creationSuccess: false,
    setCreationSuccess: (value) => set({ creationSuccess: value }),
    studyOnceId: 1,
    setStudyOnceId: (value) => set({ studyOnceId: value }),

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
        const response = await axios.post(
          'https://cafegory.robinjoon.xyz/study/once',
          sendData,
          {
            headers: {
              Authorization: accessToken,
            },
          },
        );
        set({ studyOnceId: response.data.studyOnceId });
        set({ creationSuccess: true });
      } catch (error) {
        if (
          error.response.data.errorMessage ===
          '카공 생성시 시작시간과 종료시간은 카페 영업시간내에 포함되어야 합니다.'
        ) {
          alert('카공시간을 확인해주세요.');
        } else {
          alert(`${error.response.data.errorMessage}`);
        }
        set({ creationSuccess: false });
        throw error;
      }
    },
  }),
);
