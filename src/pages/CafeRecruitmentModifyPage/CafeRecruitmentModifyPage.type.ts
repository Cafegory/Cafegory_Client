export interface OptionContentList {
  name: string;
  setName: (value: string) => void;

  maxMemberCount: number;
  setMaxMemberCount: (value: number) => void;

  canTalk: boolean;
  setCanTalk: (value: boolean) => void;

  startTime: number;
  setStartTime: (value: number) => void;

  endTime: number;
  setEndTime: (value: number) => void;

  selectedDate: Date;
  setSelectedDate: (value: Date) => void;

  openChatUrl: string;
  setOpenChatUrl: (value: string) => void;
}

export interface DateTimeCombine {
  startDateTime: string;
  setStartDateTime: (value: string) => void;

  endDateTime: string;
  setEndDateTime: (value: string) => void;
}

export interface CafeChangeState {
  showCafeSearch: boolean;
  setShowCafeSearch: (show: boolean) => void;
}

export interface MemberInfo {
  creatorId: number;
  setCreatorId: (value: number) => void;
}

export interface StudyInfo {
  studyOnceId: number;
  setStudyOnceId: (value: number) => void;
}

interface Member {
  memberId: number;
  name: string;
  thumbnailImg: string;
}

export interface MemberStore {
  members: Member[];
  setMembers: (newMembers: Member[]) => void;

  memberIds: number[];
  setMemberIds: (newMemberIds: number[]) => void;

  getMemberList: () => Promise<void>;
}
