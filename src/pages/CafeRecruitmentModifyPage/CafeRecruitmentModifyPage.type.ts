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
}

export interface DateTimeCombine {
  startDateTime: string;
  setStartDateTime: (value: string) => void;

  endDateTime: string;
  setEndDateTime: (value: string) => void;
}

export interface Cafe {
  cafeName: string;
  setCafeName: (value: string) => void;

  cafeId: Number;
  setCafeId: (value: number) => void;
}

export interface CafeChangeState {
  showCafeSearch: boolean;
  setShowCafeSearch: (show: boolean) => void;
}

export interface MemberInfo {
  creatorId: Number;
  setCreatorId: (value: number) => void;
}
