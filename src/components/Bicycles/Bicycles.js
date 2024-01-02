import { useEffect } from "react";
import {
  StyledButton,
  StyledLi,
  StyledList,
  StyledSVGContainer,
  StyledText,
  StyledTextPr,
  StyledTitle,
} from "./Bicycles.styled";
import { getBicycles, removeDocument } from "../../services/api";
import { SeletcStatus } from "../SelectStatus/SeletcStatus";

export const Bicycles = ({ ...props }) => {
  const {
    loading,
    setLoading,
    bicycles,
    setBicycles,
    error,
    setError,
    setData,
  } = props;
  useEffect(() => {
    const fetchSearch = async () => {
      setLoading(true);
      try {
        const response = await getBicycles();
        setBicycles(response.data.data);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchSearch();
  }, [setBicycles, setData, setError, setLoading]);

  const handleClick = (id) => {
    const fetchRemove = async () => {
      setLoading(true);
      try {
        await removeDocument(id);
        const response = await getBicycles();
        setBicycles(response.data.data);

        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchRemove();
  };
  return (
    <>
      <StyledList>
        {bicycles.length === 0 && !loading && !error && (
          <h2>There's nothing here yet</h2>
        )}
        {bicycles.length > 0 &&
          bicycles.map((bicycle, ind) => (
            <StyledLi key={bicycle._id}>
              <div>
                <StyledTitle>
                  <span>{bicycle.name}</span> - {bicycle.type}({bicycle.color})
                </StyledTitle>
                <StyledText>ID:{ind + 1}</StyledText>
                <SeletcStatus id={bicycle._id} statusBd={bicycle.status} />
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
    </>
  );
};
