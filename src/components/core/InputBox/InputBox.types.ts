import { TextFieldProps } from "@mui/material";

export type InputBoxProps = TextFieldProps & {
  errorMessage?: string;
};
