
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {getOverviewData, getProjectsData, getExperienceData, getTestimonialsData} from "../service/service";

const reterieveOverviewData = createAsyncThunk(
    "portfolio/reterieveReviewData",
    async () => {
      const response = await getOverviewData();
      return response.data;
    }
);

const reterieveProjectsData = createAsyncThunk(
    "portfolio/reterieveProjectsData",
    async () => {
      const response = await getProjectsData();
      return response.data;
    }
);
const reterieveExperienceData = createAsyncThunk(
    "portfolio/reterieveExperienceData",
    async () => {
      const response = await getExperienceData();
      return response.data;
    }
);
const reterieveTestimonialsData = createAsyncThunk(
    "portfolio/reterieveTestimonialsData",
    async () => {
      const response = await getTestimonialsData();
      return response.data;
    }
);


const state = {
  loading : true,
  projects: [],
  experiences: [],
  testimonials: [],
  overview_data: {},
  isDataInit : false
}



const portfolioSlice = createSlice({
  name: "portfolio",
  initialState : state,

  reducers : {
    //
  },

  extraReducers: {
    [reterieveOverviewData.fulfilled]: (state, {payload : {data : {attributes}}}) => {
      state.loading = false
      state.data = attributes
      state.isDataInit = true
    }, 
     [reterieveExperienceData.fulfilled]: (state, {payload : {data}}) => {
      state.experiences = data
     },
     [reterieveProjectsData.fulfilled]: (state, {payload : {data}}) => {
      state.projects = data
     },     
     [reterieveTestimonialsData.fulfilled]: (state, {payload : {data}}) => {
      state.testimonials = data
     },

    
  }
});

export { reterieveOverviewData, reterieveProjectsData , reterieveExperienceData, reterieveTestimonialsData}
export const dataSelector = (state) => state.portfolio;
export default portfolioSlice.reducer ;

