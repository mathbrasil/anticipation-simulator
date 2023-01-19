import { UseFormRegister } from "react-hook-form";

interface IFormInputProps {
  id: string;
  label: string;
  placeholder: string;
  register: UseFormRegister<any>;
  error: any
}

const InputComponent = ({id, label, placeholder, register, error}: IFormInputProps) => {

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        {...register(id)}
      />
      {error?.message && (
      <span>{error?.message}</span>
      )}
    </div>
  )
}

export default InputComponent