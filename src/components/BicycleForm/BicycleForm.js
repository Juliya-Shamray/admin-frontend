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
} from "./BicycleForm.styled";
import { addDocument } from "../../services/api";
import { toast } from "react-toastify";

const positiveRegExp = /^[+]?\d*\.?\d+$/;

const minLength = {
  value: 5,
  message: "Minimum length should be 5 characters",
};

export const BicycleForm = ({ setBicycles }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset,
    clearErrors,
  } = useForm();

  const onSubmit = (data) => {
    const fetchAdd = async () => {
      try {
        const res = await addDocument(data);
        setBicycles((prevBicycles) => [...prevBicycles, res.data]);
        toast.success("New bike added successfully", {
          position: "top-right",
        });
      } catch (error) {
        console(error);
      }
    };
    fetchAdd();
    reset();
  };

  const handleClickClear = () => {
    clearErrors();
    reset();
  };
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledDiv>
        <div>
          <StyledInput
            placeholder="Name"
            {...register("name", {
              required: true,
              minLength,
              type: "text",
            })}
            onBlur={() => trigger("name")}
          />
          {errors.name && <StyleError>{errors.name.message}</StyleError>}
        </div>
        <div>
          <StyledInput
            placeholder="Type"
            {...register("type", { required: true, minLength, type: "text" })}
            onBlur={() => trigger("type")}
          />
          {errors.type && <StyleError>{errors.type.message}</StyleError>}
        </div>
      </StyledDiv>

      <StyledDiv>
        <div>
          <StyledInput
            placeholder="Color"
            {...register("color", { required: true, minLength, type: "text" })}
            onBlur={() => trigger("color")}
          />
          {errors.color && <StyleError>{errors.color.message}</StyleError>}
        </div>
        <div>
          <StyledInput
            placeholder="Wheel size"
            {...register("wheelSize", {
              required: true,
              pattern: {
                value: positiveRegExp,
                message: "Please enter a positive number.",
              },
              type: { value: "number", message: "Must be a number" },
            })}
            onBlur={() => trigger("wheelSize")}
          />
          {errors.wheelSize && (
            <StyleError>{errors.wheelSize.message}</StyleError>
          )}
        </div>
      </StyledDiv>

      <StyledDiv>
        <div>
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
          {errors.price && <StyleError>{errors.price.message}</StyleError>}
        </div>

        <div>
          <StyledInput
            placeholder="ID"
            {...register("id", { required: true, minLength, type: "text" })}
            onBlur={() => trigger("id")}
          />
          {errors.id && <StyleError>{errors.id.message}</StyleError>}
        </div>
      </StyledDiv>

      <StyledWrap>
        <StyledTextArea
          placeholder="Description"
          {...register("description", {
            required: true,
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
