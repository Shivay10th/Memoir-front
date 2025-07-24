import { toastSelector } from "@/redux";
import { Alert, Snackbar } from "@mui/material";
import { useSelector } from "react-redux";

const Toast = () => {
  const toastSettings = useSelector(toastSelector);
  return (
    <Snackbar
      open={toastSettings.open}
      anchorOrigin={{ horizontal: "right", vertical: "top" }}
    >
      <Alert severity={toastSettings.severity}>{toastSettings.message}</Alert>
    </Snackbar>
  );
};
export default Toast;
