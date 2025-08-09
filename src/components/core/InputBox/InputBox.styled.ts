import styled from "styled-components";

export const InputBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ErrorSpan = styled.span`
  margin-left: 5px;
  color: ${({ theme }) => theme.palette.error.main};
`;
