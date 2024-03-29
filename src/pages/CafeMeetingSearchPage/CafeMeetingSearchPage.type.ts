export interface FilterState {
  showFitter: boolean;
  setShowFitter: (show: boolean) => void;
}

export interface UpdateFilterContent {
  onlyJoinAble: boolean;
  setOnlyJoinAble: (value: boolean) => void;

  onlyJoinAbleState: boolean;
  setOnlyJoinAbleState: (value: boolean) => void;

  maxMemberCount: number;
  setMaxMemberCount: (value: number) => void;

  maxMemberCountState: number;
  setMaxMemberCountState: (value: number) => void;

  canTalk: 'YES' | 'NO' | 'BOTH';
  setCanTalk: (value: 'YES' | 'NO' | 'BOTH') => void;

  canTalkState: 'YES' | 'NO' | 'BOTH';
  setCanTalkState: (value: 'YES' | 'NO' | 'BOTH') => void;
}

export interface SearchContent {
  area: string;
  setArea: (value: string) => void;
}

export interface OptionState {
  isSelectedOnlyJoinAble: string;
  setSelectedOptionOnlyJoinAble: (value: string | null) => void;

  isSelecteCanTalk: string;
  setSelectedCanTalk: (value: string | null) => void;
}
