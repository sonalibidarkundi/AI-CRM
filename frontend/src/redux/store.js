import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import interactionReducer from "./slices/interactionSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    interaction: interactionReducer,
  },
});