import styled from "styled-components";

export const StyledForm = styled.form`
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (min-width: 480px) {
    max-width: 500px;
    margin-top: 50px;
  }
`;
