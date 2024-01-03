import {
  StyledButton,
  StyledLi,
  StyledList,
  StyledSVGContainer,
  StyledText,
  StyledTextPr,
  StyledTitle,
} from "./Bicycles.styled";
import { removeDocument } from "../../services/api";
import { SelectStatus } from "../SelectStatus/SelectStatus";

export const Bicycles = ({ ...props }) => {
  const { loading, setLoading, bicycles, setBicycles, error, setError } = props;

  const handleClick = (id) => {
    const fetchRemove = async () => {
      setLoading(true);
      try {
        await removeDocument(id);
        const updatedBicycles = bicycles.filter(
          (bicycle) => bicycle._id !== id
        );
        setBicycles(updatedBicycles);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchRemove();
  };
  return (
    <div>
      <StyledList>
        {bicycles.length === 0 && !loading && !error && (
          <h2>There's nothing here yet</h2>
        )}
        {bicycles.map((bicycle, ind) => (
          <StyledLi key={`${bicycle._id}-${ind}`}>
            <div>
              <StyledTitle>
                <span>{bicycle.name}</span> - {bicycle.type}({bicycle.color})
              </StyledTitle>
              <StyledText>ID:{ind + 1}</StyledText>
              <SelectStatus
                id={bicycle._id}
                statusBd={bicycle.status}
                bicycles={bicycles}
                setBicycles={setBicycles}
              />
            </div>
            <StyledTextPr>{bicycle.price} UAH/hr</StyledTextPr>
            <StyledButton
              onClick={() => {
                handleClick(bicycle._id);
              }}
            >
              <StyledSVGContainer alt="close icon" />
            </StyledButton>
          </StyledLi>
        ))}
        {error && !loading && !bicycles.length && (
          <h2>Something went wrong... Try again</h2>
        )}
      </StyledList>
    </div>
  );
};
