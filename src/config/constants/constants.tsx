export const APP_KEY = '0c0a00f0e129ba94d7700f56f4c79eec';
export const APP_ID = 'd3e9e039';
export const getAPIUrl = (itemName: string) => {
  return `https://api.edamam.com/api/recipes/v2?type=public&q=${itemName}&app_id=${APP_ID}&app_key=${APP_KEY}&diet=balanced&health=alcohol-free&imageSize=REGULAR`;
};
