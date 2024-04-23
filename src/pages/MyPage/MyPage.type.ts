export interface ApiStoreState {
    profile: any[];
    fetchProfile: () => Promise<void>;
  }