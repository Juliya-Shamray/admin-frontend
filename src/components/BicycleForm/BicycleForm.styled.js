import styled from "styled-components";

export const StyledForm = styled.form`
  @media screen and (min-width: 768px) {
    width: 501px;
  }

  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-bottom: 1px solid #c4c4c4;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 50%;
  }

  padding: 5px 16px;
  max-width: 235px;
  border-radius: 5px;
  background: #e8e8e8;
  border: none;
  &::placeholder {
    color: #717171;
    font-size: 12px;
    line-height: 1.2;
  }
`;
export const StyledWrap = styled.div`
  @media screen and (min-width: 768px) {
    width: 481px;
  }
`;
export const StyledTextArea = styled.textarea`
  @media screen and (min-width: 768px) {
    width: 100%;
  }
  height: 75px;
  padding: 5px 16px;
  border-radius: 5px;
  background: #e8e8e8;
  border: none;
  &::placeholder {
    color: #717171;
    font-size: 12px;
    line-height: 1.2;
  }
`;

export const StyleWrapButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const StyledButton = styled.button`
  max-width: 180px;
  padding: 4px 22px;
  color: #fff;
  text-align: center;
  font-size: 14px;
  line-height: 1.2;
  border-radius: 5px;
  background: #696969;
  text-transform: uppercase;
  border: none;
  transition: box-shadow 250ms linear, text-shadow 250ms linear;
  &:hover,
  &:focus {
    box-shadow: 0 1px 2px 2px black;
    text-shadow: 3px 3px 3px black;
  }
  @media screen and (min-width: 768px) {
    min-width: 235px;
  }
`;
