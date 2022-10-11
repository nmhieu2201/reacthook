import { configureStore } from "@reduxjs/toolkit";
import fakebookAppReducer from "./reducers/fakebookAppReducer";
export const store = configureStore({
  reducer: {
    fakebookAppReducer: fakebookAppReducer,
  },
});
