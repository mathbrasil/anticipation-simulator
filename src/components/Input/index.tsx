import { UseFormRegister } from "react-hook-form";

import InputContainer from "./styles";

interface IFormInputProps {
  id: string
  label: string
  placeholder: string
  requirements: string
  type: string
  register: UseFormRegister<any>
  error: any
}

const Input = ({id, label, placeholder, requirements, type, register, error}: IFormInputProps) => {

  const valueNumber = type === "number" ? true : false

  return (
    <InputContainer>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        step=".01"
        placeholder={placeholder}
        {...register(id, {valueAsNumber: valueNumber})}
      />
      {error?.message ? (
        <span>{error?.message}</span>
        ) : (
          <span>{requirements}</span>
        )
      }
    </InputContainer>
  )
}

export default Input