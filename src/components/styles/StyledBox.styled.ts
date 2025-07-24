import styled from "styled-components";

export const StyledBox = styled.div`
  gap: 10px;
  max-width: 100%;
  height: 500px;
  margin: 0 auto;

  img {
    width: 100%;
  }
  @media screen and (min-width: 480px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
