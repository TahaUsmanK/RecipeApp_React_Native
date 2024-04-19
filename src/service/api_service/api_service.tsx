import {getAPIUrl} from '../../config/constants/constants';

const APIService = async (recipeName: string) => {
  const URL = getAPIUrl(recipeName);
  try {
    const response = await fetch(URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    if (response.ok) {
      return await response.json();
    } else if (response.status === 400) {
      throw new Error('Bad request');
    } else if (response.status === 401) {
      throw new Error('Unauthorized');
    } else if (response.status === 403) {
      throw new Error('Forbidden');
    } else if (response.status === 404) {
      throw new Error('Recipe not found');
    } else if (response.status === 500) {
      if (response.statusText === 'Internal Server Error') {
        throw new Error('Internal Server Error');
      } else {
        throw new Error('Something went wrong');
      }
    }
  } catch (error) {
    throw new Error(`Failed to fetch data: ${error.message}`);
  }
};

export default APIService;
