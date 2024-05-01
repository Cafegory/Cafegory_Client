import StoreState  from './RefreshModal.types';
import create from 'zustand';
import axios from 'axios';

export const refreshStore = create<StoreState>((set)=>({
  isRefreshModalOpen:false,
  toggleRefreashModal:()=> set((state) => ({ isRefreshModalOpen: !state.isRefreshModalOpen })),
}))

const refreshToken =JSON.parse(localStorage.getItem('refreshToken'));

export const postToken = async () => {
    const reviewData = {
        "refreshToken" : refreshToken
    }
    try {
        const response = await axios.post('https://cafegory.robinjoon.xyz/oauth2/refresh', reviewData, {
      });
      console.log(response.data)
      localStorage.setItem(
        'accessToken',
        JSON.stringify(response.data.accessToken),
      );
      localStorage.setItem(
        'refreshToken',
        JSON.stringify(response.data.refreshToken),
      );
    } catch (error) {
        console.log("error")
    }
  }



  export function tokenRefresh(error, isLoggedIn) {
    if (error.response && error.response.status === 401 && isLoggedIn) {
      refreshStore.getState().toggleRefreashModal();
    } else {
      console.error('Error:', error);
    }
  }