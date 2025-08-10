import { authApi } from "../auth";
import { userApi } from "../user";
import { TOAST_STORE_NAME, toastReducer } from "../utils";

export const FEATURE_REDUCER = {
  [TOAST_STORE_NAME]: toastReducer,
};
export const API_REDUCER = {
  [authApi.reducerPath]: authApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
};
