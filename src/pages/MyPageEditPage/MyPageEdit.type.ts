export interface NameState {
    name: string;
    setName: (newName: string) => void;
  }

  export interface IntroductionState {
    introduction: string;
    setIntroduction: (newIntroduction: string) => void;
  }
  
  export interface ProfileState  {
    profilePicture: string | null;
    setProfilePicture: (pictureUrl: string) => void;
  };