export interface Question {
  question: string;
  setQuestion: (value: string) => void;
}

export interface Answer {
  answer: string;
  setAnswer: (value: string) => void;
}

export interface ApiStoreState {
  info: {
    "cafeId" : number,
    "cafeName" : string,
    "area" : string,
    "studyOnceId" : number,
    "name" : string,
    "startDateTime" : string,
    "endDateTime" : string,
    "maxMemberCount" : number,
    "nowMemberCount" : number,
    "canTalk" : boolean,
    "canJoin" : boolean,
    "isEnd" : boolean 
  }
  fetchInfo: (studyOnceId:string) => Promise<void>;
}

export interface qnaStoreState {
  qna:  {
    "replyWriter" : {
      "memberId" : number,
      "name" : string,
      "thumbnailImg" : string,
    },
    "comments" : [
      {
        "questionWriter" : {
            "memberId" : number,
            "name" : string,
            "thumbnailImg" : string
        },
        "questionInfo" : {
            "commentId" : number,
            "comment" : string
        },
        "replies" : [ 
          {
            "replyInfo" : {
              "commentId" : number,
              "comment" : string
            } 
          }
        ]
      }, 
    ]
  },
  fetchQna: (studyOnceId:string) => Promise<void>;
}
