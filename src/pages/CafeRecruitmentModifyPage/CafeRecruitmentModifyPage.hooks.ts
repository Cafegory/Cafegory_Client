import { create } from 'zustand';
import {
  OptionContentList,
  DateTimeCombine,
  CafeChangeState,
  MemberInfo,
  StudyInfo,
  MemberStore,
} from './CafeRecruitmentModifyPage.type';
import axios from 'axios';
import { tokenRefresh } from '../../components/RefreshModal/RefreshModal.hooks';
import { useUser } from '../../store/users/store';

const accessToken = JSON.parse(localStorage.getItem('accessToken'));

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

  nowMemberCount: 0,
  setNowMemberCount: (value) => set({ nowMemberCount: value }),
}));

export const DateTime = create<DateTimeCombine>((set) => ({
  startDateTime: 'yyyy-MM-ddThh:mm:ss',
  setStartDateTime: (value) => set({ startDateTime: value }),

  endDateTime: 'yyyy-MM-ddThh:mm:ss',
  setEndDateTime: (value) => set({ endDateTime: value }),
}));

export const cafeChange = create<CafeChangeState>((set) => ({
  showCafeSearch: false,
  setShowCafeSearch: (value) => set({ showCafeSearch: value }),
}));

export const member = create<MemberInfo>((set) => ({
  creatorId: 1,
  setCreatorId: (value) => set({ creatorId: value }),
}));

export const study = create<StudyInfo>((set) => ({
  studyOnceId: null,
  setStudyOnceId: (value) => set({ studyOnceId: value }),
}));

export const useMemberStore = create<MemberStore>((set) => ({
  members: [],
  setMembers: (newMembers) => set({ members: newMembers }),

  memberIds: [],
  setMemberIds: (newMemberIds) => set({ memberIds: newMemberIds }),

  getMemberList: async () => {
    try {
      const response = await axios.get(
        `https://cafegory.robinjoon.xyz/study/once/${study.getState().studyOnceId}/member/list`,
        {
          headers: {
            Authorization: accessToken,
          },
        },
      );
      const ids = response.data.joinedMembers.map((member) => member.memberId);
      set({ members: response.data.joinedMembers.reverse() });
      set({ memberIds: ids });
      console.log('멤버 출력', JSON.stringify(response.data));
    } catch (error) {
      const isLoggedIn = useUser.getState().isLoggedIn;
      tokenRefresh(error, isLoggedIn); 
    }
  },
}));
