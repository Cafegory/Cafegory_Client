
import {ApiStoreState} from './MyPage.type';
import create from 'zustand';
import axios from 'axios';

const accessToken = JSON.parse(localStorage.getItem('accessToken'));
const memberId = JSON.parse(localStorage.getItem('memberId'));

export const profileApiStore = create<ApiStoreState>((set) => ({
    name: "",
    introduction:"",
    thumbnailingImg:"",
    setName: (newName) => set({ name: newName }),
    setIntroduction: (newIntroduction) => set({ introduction: newIntroduction }),
    setThumbnailingImg: (newImg) => set({ thumbnailingImg: newImg }),
  
    fetchProfile: async () => {
      try {
        const response = await axios.get(`/profile/${memberId}`, {
          headers: {
            Authorization: accessToken,
          },
        });
        set({ name: response.data.name });
        set({ introduction: response.data.introduction });
        set({ thumbnailingImg: response.data.thumbnailImg });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    patchProfile: async () => {
        const profileData = {
            name:profileApiStore.getState().name,
            introduction:profileApiStore.getState().introduction,
        }
        try {
          await axios.patch(`/profile/${memberId}`,profileData,{
            headers: {
              Authorization: accessToken,
            },
          });
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      },
  }));

//   export const patchReview = async () => {
//     const reviewData = {
//       content: useContentStore.getState().content,
//       rate: useRatingStore.getState().rating
//     };
    
//     try {
//       const id = ReviewEditStore.getState().editReviewId;
//       await axios.patch(`/cafe/review/${id}`,reviewData, {
//         headers: {
//           Authorization: accessToken,
//         }
//       });
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   }
  