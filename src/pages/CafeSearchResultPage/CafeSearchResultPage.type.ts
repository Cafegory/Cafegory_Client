import { BooleanLiteral } from 'typescript';

export interface FilterState {
  showFitter: boolean;
  setShowFitter: (show: boolean) => void;
}
export interface FilterState {
  showFitter: boolean;
  setShowFitter: (show: boolean) => void;
}

export interface UpdateFilterContent {
  canStudy: boolean;
  setCanStudy: (value: boolean) => void;

  canStudyState: boolean;
  setCanStudyState: (value: boolean) => void;

  startTime: number;
  setStartTime: (value: number) => void;

  startTimeState: number;
  setStartTimeState: (value: number) => void;

  endTime: number;
  setEndTime: (value: number) => void;

  endTimeState: number;
  setEndTimeState: (value: number) => void;

  minBeveragePrice: number;
  setMinBeveragePrice: (value: number) => void;

  minBeveragePriceState: number;
  setMinBeveragePriceState: (value: number) => void;

  maxTime: number;
  setMaxTime: (value: number) => void;

  maxTimeState: number;
  setMaxTimeState: (value: number) => void;
}

export interface SearchContent {
  area: string;
  setArea: (value: string) => void;
}

export interface OptionState {
  isSelectedCanStudy: string;
  setSelectedCanStudy: (value: string) => void;

  isSelectedMinBeveragePrice: number;
  setSelectedMinBeveragePrice: (value: number | null) => void;

  isSelectedMaxTime: number;
  setSelectedMaxTime: (value: number) => void;
}

export interface DetailModalState {
  adressModalState: boolean[];
  setAdressModalState: (value: boolean[]) => void;

  businessHourModalState: boolean[];
  setBusinessHourModalState: (value: boolean[]) => void;

  addresses: string[];
  setAddresses: (value: string[]) => void;
}

export interface PageState {
  nowPage: number;
  setNowPage: (value: number) => void;

  maxPage: number;
  setMaxPage: (value: number) => void;

  pageSize: number;
  setPageSize: (value: number) => void;
}
