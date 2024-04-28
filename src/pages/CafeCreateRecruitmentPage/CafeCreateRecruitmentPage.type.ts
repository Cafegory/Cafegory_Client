import { NumberLiteralType } from 'typescript';

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

export interface OptionState {
  isSelectedCanStudy: string;
  setSelectedCanStudy: (value: string) => void;
}

export interface Cafe {
  cafeName: string;
  setCafeName: (value: string) => void;

  cafeId: number;
  setCafeId: (value: number) => void;

  getCafeInfo: () => Promise<void>;
}

export interface CafeCreateResruitmentApi {
  studyOnceId: number;
  setStudyOnceId: (value: number) => void;
  postCafeCreateResruitment: () => Promise<void>;
  creationSuccess: boolean;
  setCreationSuccess: (value: boolean) => void;
}
