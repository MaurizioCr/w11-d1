// In un file chiamato actions.js
export const addFavorite = (companyName) => ({
    type: "ADD_FAVORITE",
    payload: companyName,
  });
  
  export const removeFavorite = (companyName) => ({
    type: "REMOVE_FAVORITE",
    payload: companyName,
  });
  