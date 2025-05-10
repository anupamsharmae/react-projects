import { apploadAction } from "./appload-slice";

export const getAppload = () => {
   return async (dispatch) => {
      const fetchAppload = async () => {
         const response = await fetch('/src/assets/data/appload.json');
         const respData = await response.json();
         return respData.response.data;
      }

      try {
         const data = await fetchAppload();
         dispatch(apploadAction.setApploadData({
            data
         }))
      } catch (error) {
         console.log('error---', error);
      }
   }
}