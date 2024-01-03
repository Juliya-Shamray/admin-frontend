import {
  StyledDiv,
  StyledSpan,
  StyledText,
  StyledTitle,
} from "./Statistics.styled";

export const Statistics = ({ bicycles }) => {
  const totalBikes = bicycles.length;

  const availableBikes = bicycles.filter(
    (bike) => bike.status === "available"
  ).length;

  const bookedBikes = bicycles.filter((bike) => bike.status === "busy").length;

  const totalCost = Number(
    bicycles.reduce((acc, bike) => acc + Number(bike.price), 0)
  );

  const averageCost =
    totalBikes > 0 ? Number((totalCost / totalBikes).toFixed(2)) : 0;

  return (
    <StyledDiv>
      <StyledTitle>STATISTICS</StyledTitle>
      <StyledText>
        Total Bikes: <StyledSpan>{totalBikes}</StyledSpan>
      </StyledText>
      <StyledText>
        Available Bikes: <StyledSpan>{availableBikes}</StyledSpan>
      </StyledText>
      <StyledText>
        Booked Bikes: <StyledSpan>{bookedBikes}</StyledSpan>
      </StyledText>
      <StyledText>
        Average bike cost: <StyledSpan>{averageCost}</StyledSpan> UAH/hr.
      </StyledText>
    </StyledDiv>
  );
};
