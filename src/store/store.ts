// Redux
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

// Slices
import { authSlice } from "./../slices/authSlice";

export const store = configureStore({
   reducer: {
      auth: authSlice.reducer,
   },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;