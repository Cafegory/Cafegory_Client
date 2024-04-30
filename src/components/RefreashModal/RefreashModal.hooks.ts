import StoreState  from './RefreashModal.types';
import create from 'zustand';
import axios from 'axios';


export const refreashStore = create<StoreState>((set) => ({
  isRefreashModalOpen: false,
  toggleRefreashModal: () => set((state) => ({ isRefreashModalOpen: !state.isRefreashModalOpen })),
}));

const refreashToken =JSON.parse(localStorage.getItem('refreashToken'));

export const postToken = async () => {
    const reviewData = {
        "refreshToken" : refreashToken
    }
    try {
        const response = await axios.post('/oauth2/refresh', reviewData, {
      });
      console.log(response.data)
      localStorage.setItem(
        'accessToken',
        JSON.stringify(response.data.accessToken),
      );
      localStorage.setItem(
        'refreashToken',
        JSON.stringify(response.data.refreshToken),
      );
    } catch (error) {
        console.log("error")
    }
  }



  export function tokenRefreash(error, isLoggedIn) {
    if (error.response && error.response.status === 401 && isLoggedIn) {
      refreashStore.getState().toggleRefreashModal();
    } else {
      console.error('Error:', error);
    }
  }