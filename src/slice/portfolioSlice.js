
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import getAllData from "../service/service";

const reterieveAllData = createAsyncThunk(
    "portfolio/reterieveAllData",
    async () => {
      const response = await getAllData();
      return response.data;
    }
  );


const portfolioSlice = createSlice({
  name: "portfolio",
  initialState : {
    loading : true,
    data : [],
    isDataInit : false
  },

  reducers : {
    //
  },

  extraReducers: {
    [reterieveAllData.fulfilled]: (state, action) => {
      state.loading = false
      state.data = action.payload;
      state.isDataInit = true
    },

    
  }
});

export { reterieveAllData }
export const dataSelector = (state) => state.portfolio;
export default portfolioSlice.reducer ;

