import { configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers/favouritesSlice";

const store = configureStore({
  reducer: {
    favourites: favouritesReducer,
  },
});

export default store;
