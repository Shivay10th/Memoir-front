import { AlertColor } from "@mui/material";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const TOAST_STORE_NAME = "toast";

interface ToastState {
  open: boolean;
  message: string;
  severity: AlertColor;
}

const initialState: ToastState = {
  open: false,
  message: "",
  severity: "success",
};

const toastSlice = createSlice({
  name: TOAST_STORE_NAME,
  initialState,
  reducers: {
    showToast: (state, action: PayloadAction<ToastState>) => {
      state.message = action.payload.message;
      state.open = action.payload.open;
      state.severity = action.payload.severity;
    },
    hideToast: (state) => {
      state.message = "";
      state.open = false;
    },
  },
});

export const { showToast, hideToast } = toastSlice.actions;

export default toastSlice.reducer;
