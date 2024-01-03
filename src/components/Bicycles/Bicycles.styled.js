import styled, { keyframes } from "styled-components";
import { ReactComponent as CloseIcon } from "../../images/close.svg";

const strokeAnimation = keyframes`
  from {
    stroke: black;
  }
  to {
    stroke: red;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const StyledLi = styled.li`
  border-radius: 10px;
  border: 2px solid #6fcf97;
  background: #e8e8e8;
  padding: 12px 12px 12px 18px;

  display: flex;
  flex-direction: column;
  gap: 15px;

  position: relative;

  ${({ $status }) => $status === "busy" && ` border-color: #F2994A; `}
  ${({ $status }) => $status === "unavailable" && ` border-color: #EB5757; `}


  @media screen and (min-width: 768px) {
    max-width: 618px;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    align-items: flex-end;
    gap: 0;
  }
`;

export const StyledTitle = styled.h1`
  color: #333;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 5px;
  text-transform: uppercase;
  & > span {
    font-weight: 700;
  }
`;

export const StyledText = styled.p`
  color: #717171;
  font-size: 8px;
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 5px;
`;
export const StyledSpan = styled.span`
  color: #333;
  font-size: 14px;
  line-height: 1.2;
  text-transform: uppercase;
`;

export const StyledSelect = styled.select`
  border: none;
  background-color: inherit;
  color: #333;
  font-family: Saira;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const StyledTextPr = styled.p`
  color: #000;
  font-size: 24px;
  line-height: 1.2;
`;

export const StyledButton = styled.button`
  position: absolute;
  right: 12px;
  top: 12px;
  border: none;
  background-color: inherit;
`;

export const StyledSVGContainer = styled(CloseIcon)`
  transition: stroke 250ms linear;
  :hover,
  :focus {
    animation: ${strokeAnimation} 250ms linear forwards;
  }
`;
