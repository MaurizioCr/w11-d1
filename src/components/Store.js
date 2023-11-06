
import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

// Reducer per le preferenze dell'utente
const favoritesReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return [...state, action.payload];
    case "REMOVE_FAVORITE":
      return state.filter((item) => item !== action.payload);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  favorites: favoritesReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
