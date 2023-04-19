import api from "../api/portfolio";

const getAllData = () => {
  return api.get("/contacts");
};



export default getAllData