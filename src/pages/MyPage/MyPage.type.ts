export interface ApiStoreState {
    fetchProfile: () => Promise<void>;
    patchProfile: () => Promise<void>;
    name: string;
    setName: (newName: string) => void;
    introduction: string;
    setIntroduction: (newIntroduction: string) => void;
    thumbnailingImg: string;
    setThumbnailingImg: (newImg: string) => void;
  }