import styled from "styled-components";

export const StyledMain = styled.main`
  padding: 9px 12px;
  flex-grow: 1;
`;

export const StyledWrap = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
`;
