import { hideToast, showToast } from "@/redux";
import { AxiosGenericError } from "@/utils/http/http.type";
import { AlertColor } from "@mui/material";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
interface ToastArguments {
  message?: string;
  error?: unknown;
  severity?: AlertColor;
}
export const useToast = () => {
  const dispatch = useDispatch();
  return useCallback(
    ({ message, error, severity = "success" }: ToastArguments) => {
      let alertMessage = message ?? "";
      let alertSeverity = severity;
      if (error) {
        const { response } = error as AxiosGenericError;
        alertMessage = response?.data?.errorMessage ?? "Something went wrong!";
        alertSeverity = "error";
      }
      dispatch(
        showToast({
          open: true,
          message: alertMessage,
          severity: alertSeverity,
        })
      );
      setTimeout(() => {
        dispatch(hideToast());
      }, 2000);
    },
    []
  );
};
