import { TextField } from "@mui/material";
import { InputBoxProps } from "./InputBox.types";
import { forwardRef, Ref } from "react";
import { ErrorSpan, InputBoxWrapper } from "./InputBox.styled";

const InputBox = (
  { errorMessage, ...rest }: InputBoxProps,
  ref: Ref<HTMLInputElement | null>
) => {
  return (
    <InputBoxWrapper>
      <TextField
        ref={ref}
        error={!!errorMessage}
        variant="outlined"
        {...rest}
      />
      {errorMessage && <ErrorSpan>{errorMessage}</ErrorSpan>}
    </InputBoxWrapper>
  );
};

export default forwardRef(InputBox);
