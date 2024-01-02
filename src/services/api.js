import axios from "axios";
axios.defaults.baseURL = "https://admin-panel2-um6f.onrender.com";

export const getBicycles = async () => {
  const res = await axios.get("/api/admin//bike-booking");
  return res;
};

export const changeStatus = async (id, data) => {
  const res = await axios.patch(`/api/admin/${id}/status`, {
    status: data,
  });
  return res;
};

export const addDocument = async (data) => {
  const res = await axios.post(`/api/admin/add`, {
    ...data,
  });
  return res;
};

export const removeDocument = async (id) => {
  const res = await axios.delete(`/api/admin/${id}/remove`);
  return res;
};
