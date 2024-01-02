import { useState } from "react";
import {
  StyleWrapButton,
  StyledButton,
  StyledDiv,
  StyledForm,
  StyledInput,
  StyledTextArea,
  StyledWrap,
} from "./BicycleForm.styled";

export const BicycleForm = () => {
  const [formData, setFormData] = useState({
    id: 3,
    name: "",
    type: "",
    color: "",
    wheelSize: "",
    price: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClickClear = () => {
    setFormData({
      id: "",
      name: "",
      type: "",
      color: "",
      wheelSize: "",
      price: "",
      description: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //  const fetchRemove = async () => {
    //    setLoading(true);
    //    try {
    //      await removeDocument(id);
    //      const updatedBicycles = bicycles.filter((bicycle) => bicycle._id !== id);
    //      setBicycles(updatedBicycles);
    //    } catch (error) {
    //      setError(error);
    //    } finally {
    //      setLoading(false);
    //    }
    //  };
    //  fetchRemove();
    //     console.log("Form data submitted:", formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledDiv>
        <StyledInput
          placeholder="Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <StyledInput
          placeholder="Type"
          type="text"
          name="type"
          value={formData.type}
          onChange={handleChange}
        />
      </StyledDiv>
      <StyledDiv>
        <StyledInput
          placeholder="Color"
          min={5}
          type="text"
          name="color"
          value={formData.color}
          onChange={handleChange}
        />
        <StyledInput
          placeholder="Wheel size"
          type="number"
          name="wheelSize"
          value={formData.wheelSize}
          onChange={handleChange}
        />
      </StyledDiv>
      <StyledDiv>
        <StyledInput
          placeholder="Price"
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
        <StyledInput
          placeholder="ID"
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
        />
      </StyledDiv>
      <StyledWrap>
        <StyledTextArea
          placeholder="Description"
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </StyledWrap>
      <StyleWrapButton>
        <StyledButton type="submit">Save</StyledButton>
        <StyledButton onClick={handleClickClear}>Clear</StyledButton>
      </StyleWrapButton>
    </StyledForm>
  );
};
