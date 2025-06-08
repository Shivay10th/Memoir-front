import styled from "styled-components";

export const StyledBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  max-width: 100%;
  box-shadow: 10px 10px 10px 10px black;
  height: 500px;
  margin: 0 auto;

  img {
    width: 100%;
  }
`;
