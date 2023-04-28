import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getOverviewData,
  getProjectsData,
  getExperienceData,
  getTestimonialsData,
} from "../service/service";

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

// function for return easy to read array of objects of strapi complicated data

function convertComplicatedArray(array) {
  return array.map((obj) => obj.attributes);
}

// function to add tag class color name randomly here

function generateRandomColor() {
  // List of possible color names
  const colorNames = ["red", "blue", "green", "pink", "orange"];

  // Generate a random color name
  const colorIndex = Math.floor(Math.random() * colorNames.length);
  const colorName = colorNames[colorIndex];

  // Return the color name
  return colorName;
}

const state = {
  loading: true,
  projects: [],
  experiences: [],
  testimonials: [],
  overview_data: {},
  isDataInit: false,
};

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState: state,

  reducers: {
    //
  },

  extraReducers: {
    [reterieveOverviewData.fulfilled]: (
      state,
      {
        payload: {
          data: { attributes },
        },
      }
    ) => {
      state.loading = false;
      state.overview_data = attributes;
      state.isDataInit = true;
    },
    [reterieveExperienceData.fulfilled]: (state, { payload: { data } }) => {
      state.experiences = convertComplicatedArray(data);
    },
    [reterieveProjectsData.fulfilled]: (state, { payload: { data } }) => {
      const projects = convertComplicatedArray(data);

      const projectsTags = projects.map((project, idx) => {
        return (projects[idx].tags = projects[idx].tags
          .split(",")
          .map((tag) => ({
            name: `${tag}`,
            color: generateRandomColor() + "-text-gradient",
          })));
      });

      const newProjects = projects.map((project, idx) => {
        return { ...project, tags: projectsTags[idx] };
      });

      state.projects = newProjects;
    },
    [reterieveTestimonialsData.fulfilled]: (state, { payload: { data } }) => {
      state.testimonials = convertComplicatedArray(data);
    },
  },
});

export {
  reterieveOverviewData,
  reterieveProjectsData,
  reterieveExperienceData,
  reterieveTestimonialsData,
};
export const dataSelector = (state) => state.portfolio;
export default portfolioSlice.reducer;
