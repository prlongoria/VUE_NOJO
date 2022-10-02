import axios from "axios";

const baseUrl = "http://localhost:8080/api/v1/stone";

export const apiStones = {
  getStones() {
    return axios.get(baseUrl);
  },

  showStone(id) {
    return axios.get(baseUrl + `/show /${id}`);
  },

  deleteStone(id) {
    return axios.delete(baseUrl + `/delete/${id}`);
  },

  createStone(formData) {
    return axios.post(baseUrl + "/create" + formData);
  },

  updateStone(formData) {
    return axios.put(baseUrl + "/update", formData);
  },
  
};
export default apiStones;
