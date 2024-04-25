import { create } from 'zustand';
import {
  MemberInfo,
  AttendanceContent,
  AttendanceApiState,
} from './AttendancePage.type';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const accessToken = JSON.parse(localStorage.getItem('accessToken'));
const { studyOnceId: routeStudyOnceId } = useParams();

export const member = create<MemberInfo>((set) => ({
  creatorId: 1,
  setCreatorId: (value) => set({ creatorId: value }),
}));

export const AttendanceState = create<AttendanceContent>((set) => ({
  attendance: false,
  setAttendance: (value) => set({ attendance: value }),
}));
