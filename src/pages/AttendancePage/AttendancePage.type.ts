export interface MemberInfo {
  creatorId: Number;
  setCreatorId: (value: number) => void;

  memberIds: number[];
  setMemberIds: (value: number[]) => void;
}

export interface AttendanceContent {
  attendance: boolean;
  setAttendance: (value: boolean) => void;
}

export interface AttendanceApiState {
  patchAttendanceApi: () => Promise<void>;
}

export interface CheckedState {
  [key: number]: {
    check: boolean;
    x: boolean;
  };
}

export interface CheckedStateStore {
  checkedState: CheckedState;
  setCheckedState: (state: CheckedState) => void;
}
