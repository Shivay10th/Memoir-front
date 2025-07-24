import { toastReducer } from "@/redux/utils/Toast";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    toast: toastReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
