import axios from 'axios';

export const getAnimals = async (amount: string) => {
  const res = axios.get(`https://api.thedogapi.com/v1/images/search?limit=${amount}`, {
    headers: {
        "x-api-key": "live_GBl6Ue0GYu2vnbBToAubbTVxJAvVQxjRMck3NsO9ykKE46gU02d55H7c8hXOzvnc"
    },
  });

  return res;
};

