import { authAPI } from "../auth";
import { TOAST_STORE_NAME, toastReducer } from "../utils";

export const FEATURE_REDUCER = {
  [TOAST_STORE_NAME]: toastReducer,
};
export const API_REDUCER = {
  [authAPI.reducerPath]: authAPI.reducer,
};
