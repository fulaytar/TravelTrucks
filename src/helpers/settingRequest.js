import axios from 'axios';
axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers';

export const validationData = async (id = '') => {
  try {
    const response = await axios.get(`/${id}`);
    if (id !== '') {
      console.log(response.data);
      return response.data;
    }
    return response.data.items;
  } catch (error) {
    return [];
  }
};
