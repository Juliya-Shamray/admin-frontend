import { useForm } from "react-hook-form";
import {
  StyleError,
  StyleWrapButton,
  StyledButton,
  StyledDiv,
  StyledForm,
  StyledInput,
  StyledTextArea,
  StyledWrap,
  StyledDivErr,
} from "./BicycleForm.styled";
import { addDocument } from "../../services/api";

const positiveRegExp = /^[+]?\d*\.?\d+$/;

const minLength = {
  value: 5,
  message: "Minimum length should be 5 characters",
};

const required = {
  value: true,
  message: "Field is empty ",
};

export const BicycleForm = ({ setBicycles, bicycles }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const bikeDataWithStatus = { ...data, status: "available" };
    const updatedBicycles = [...bicycles, bikeDataWithStatus];

    setBicycles(updatedBicycles);

    const fetchAdd = async () => {
      try {
        await addDocument(data);
      } catch (error) {
        console(error);
      }
    };
    fetchAdd();
    reset();
  };

  const handleClickClear = () => {
    reset();
  };
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledDiv>
        <StyledInput
          placeholder="Name"
          {...register("name", {
            required,
            minLength,
            type: "text",
          })}
          onBlur={() => trigger("name")}
        />
        <StyledInput
          placeholder="Type"
          {...register("type", { required, minLength, type: "text" })}
          onBlur={() => trigger("type")}
        />
      </StyledDiv>
      <StyledDivErr>
        {errors.name && <StyleError>{errors.name.message}</StyleError>}
        {errors.type && <StyleError>{errors.type.message}</StyleError>}
      </StyledDivErr>
      <StyledDiv>
        <StyledInput
          placeholder="Color"
          {...register("color", { required, minLength, type: "text" })}
          onBlur={() => trigger("color")}
        />

        <StyledInput
          placeholder="Wheel size"
          {...register("wheelSize", {
            required,
            pattern: {
              value: positiveRegExp,
              message: "Please enter a positive number.",
            },
            type: { value: "number", message: "Must be a number" },
          })}
          onBlur={() => trigger("wheelSize")}
        />
      </StyledDiv>
      <StyledDivErr>
        {errors.color && <StyleError>{errors.color.message}</StyleError>}
        {errors.wheelSize && (
          <StyleError>{errors.wheelSize.message}</StyleError>
        )}
      </StyledDivErr>
      <StyledDiv>
        <StyledInput
          placeholder="Price"
          {...register("price", {
            pattern: {
              value: positiveRegExp,
              message: "Please enter a positive number.",
            },
            type: { value: "number", message: "Must be a number" },
          })}
          onBlur={() => trigger("price")}
        />
        <StyledInput
          placeholder="ID"
          {...register("id", { required, minLength, type: "text" })}
          onBlur={() => trigger("id")}
        />
      </StyledDiv>
      <StyledDivErr>
        {errors.price && <StyleError>{errors.price.message}</StyleError>}
        {errors.id && <StyleError>{errors.id.message}</StyleError>}
      </StyledDivErr>

      <StyledWrap>
        <StyledTextArea
          placeholder="Description"
          {...register("description", {
            required,
            minLength,
            type: "text",
          })}
          onBlur={() => trigger("description")}
        />
        {errors.description && (
          <StyleError>{errors.description.message}</StyleError>
        )}
      </StyledWrap>
      <StyleWrapButton>
        <StyledButton type="submit">Save</StyledButton>
        <StyledButton onClick={handleClickClear}>Clear</StyledButton>
      </StyleWrapButton>
    </StyledForm>
  );
};
