import axios from 'axios';
axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers';

export const validationData = async (path = '') => {
  try {
    const response = await axios.get(`/${path}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return [];
  }
};
