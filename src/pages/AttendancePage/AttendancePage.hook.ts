import { create } from 'zustand';
import {
  MemberInfo,
  AttendanceContent,
  AttendanceApiState,
  CheckedStateStore,
} from './AttendancePage.type';

export const member = create<MemberInfo>((set) => ({
  creatorId: 1,
  setCreatorId: (value) => set({ creatorId: value }),

  memberIds: [],
  setMemberIds: (value) => set({ memberIds: value }),
}));

export const AttendanceState = create<AttendanceContent>((set) => ({
  attendance: false,
  setAttendance: (value) => set({ attendance: value }),
}));

export const useCheckedStateStore = create<CheckedStateStore>((set) => ({
  checkedState: {},
  setCheckedState: (state) => set({ checkedState: state }),
}));
