import { useEffect, useRef, useState } from "react";
import { StyledSelect, StyledSpan } from "../Bicycles/Bicycles.styled";
import { changeStatus } from "../../services/api";

export const SeletcStatus = ({ id, statusBd }) => {
  const statusBD = statusBd.charAt(0).toUpperCase() + statusBd.slice(1);

  const isInitialRender = useRef(true);
  const [status, setStatus] = useState(statusBD);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }
    const updateStatus = async () => {
      try {
        const res = await changeStatus(id, status.toLowerCase());
        return res;
      } catch (error) {
        console.log(error);
      }
    };
    updateStatus();
  }, [id, status]);

  const handleChange = (e) => {
    const { value } = e.target;
    setStatus(value);
  };

  return (
    <div>
      <StyledSpan>Status: </StyledSpan>
      <StyledSelect name="status" onChange={handleChange} value={status}>
        {["Available", "Busy", "Unavailable"].map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </StyledSelect>
    </div>
  );
};
