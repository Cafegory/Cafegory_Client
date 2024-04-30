export interface ApiStoreState {
  info: {
    basicInfo: {
      name: string;
      address: string;
      isOpen: boolean;
      businessHours: { day: string; startTime: string; endTime: string }[];
      sns: { name: string; url: string }[];
      phone: string;
      avgReviewRate: number;
      canStudy: boolean;
    };
    reviews: {
      writer: { name: string; thumbnailImg: string };
      rate: number;
      content: string;
    }[];
    meetings: {
      name: string;
      startDateTime: string;
      endDateTime: string;
      maxMemberCount: number;
      nowMemberCount: number;
      isEnd: boolean;
    }[];
  };
  fetchInfo: () => Promise<void>;
}
