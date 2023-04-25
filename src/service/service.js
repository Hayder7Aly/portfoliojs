import api from "../api/portfolio";

const getOverviewData = () => {
  return api.get("/portfolio-overview");
};

const getProjectsData = () => {
  return api.get("/projects")
}

const getExperienceData = () => {
  return api.get("/experiences")
}

const getTestimonialsData = () => {
  return api.get("/testimonials")
}



export {getOverviewData,getProjectsData,getExperienceData,getTestimonialsData} 