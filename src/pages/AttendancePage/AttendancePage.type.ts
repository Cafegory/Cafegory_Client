export interface MemberInfo {
  creatorId: Number;
  setCreatorId: (value: number) => void;
}

export interface AttendanceContent {
  attendance: boolean;
  setAttendance: (value: boolean) => void;
}

export interface AttendanceApiState {
  patchAttendanceApi: () => Promise<void>;
}
