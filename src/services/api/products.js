import axios from 'axios';
import endPoints from '@services/api';

export const addProduct = async (body) => {
  const config = {
    accept: '*/*',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.post(endPoints.products.addProducts, body, config);
  return response.data;
};

export const updateProduct = async (id, body) => {
  const config = {
    accept: '*/*',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.put(endPoints.products.updateProducts(id), body, config);
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await axios.delete(endPoints.products.deleteProduct(id));
  return response.data;
};
