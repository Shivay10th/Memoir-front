import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authApi } from "../auth";
import { API_REDUCER, FEATURE_REDUCER } from "../common/reducer";
import { userApi } from "../user";

const rootReducer = combineReducers({
  ...FEATURE_REDUCER,
  ...API_REDUCER,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(userApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
