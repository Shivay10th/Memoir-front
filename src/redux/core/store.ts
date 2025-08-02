import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authAPI } from "../auth";
import { API_REDUCER, FEATURE_REDUCER } from "../common/reducer";

const rootReducer = combineReducers({
  ...FEATURE_REDUCER,
  ...API_REDUCER,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authAPI.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
