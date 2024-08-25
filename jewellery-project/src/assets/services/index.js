import axios from "axios";

const BASE_URL = "http://localhost:3005";

export const getAllDataProduct = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/products`);
    return res;
  } catch (error) {
    console.log("error");
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL}/products/${id}`);
    return res;
  } catch (error) {
    console.log("error");
    throw error;
  }
};
