import {
  StyledDiv,
  StyledSpan,
  StyledText,
  StyledTitle,
} from "./Statistics.styled";

export const Statistics = ({ data }) => {
  return (
    <StyledDiv>
      <StyledTitle>STATISTICS</StyledTitle>
      <StyledText>
        Total Bikes: <StyledSpan>{data.total}</StyledSpan>
      </StyledText>
      <StyledText>
        Available Bikes: <StyledSpan>{data.available}</StyledSpan>
      </StyledText>
      <StyledText>
        Booked Bikes: <StyledSpan>{data.busy}</StyledSpan>
      </StyledText>
      <StyledText>
        Average bike cost: <StyledSpan>{data.avgPrice?.toFixed(2)}</StyledSpan>{" "}
        UAH/hr.
      </StyledText>
    </StyledDiv>
  );
};
