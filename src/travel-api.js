import { validationData } from './helpers/settingRequest';

export const getAllCampers = async () => {
  const data = await validationData();
  return data;
};

export const getCampersById = async id => {
  const data = await validationData(id);
  return data;
};
