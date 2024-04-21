export const APP_KEY = 'd32e2535db19ea2916481574a20f1e91';
export const APP_ID = '3dcf3b1b';
export const getAPIUrl = (
  itemName: string,
  cuisineType: string,
  diet: string,
  mealType: string,
  dishType: string,
) => {
  return `https://api.edamam.com/api/recipes/v2?type=public&q=${itemName}&app_id=${APP_ID}&app_key=${APP_KEY}&cuisineType=${cuisineType}&diet=${diet}&mealType=${mealType}&dishType=${dishType}&health=alcohol-free&imageSize=REGULAR`;
};
