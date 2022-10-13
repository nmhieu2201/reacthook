import { configureStore } from "@reduxjs/toolkit";
import fakebookAppReducer from "./reducers/fakebookAppReducer";
import userReducer from "./reducers/userReducer";
export const store = configureStore({
  reducer: {
    fakebookAppReducer: fakebookAppReducer,
    userReducer: userReducer,
  },
});
