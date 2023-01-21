import api from "../../services/api"
import Input from "../Input"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import dataSchema from '../../validators'

import StyledForm from "./styles"

interface IFormValues {
  amount: number
  installments: number
  mdr: number
  days?: any
}

const Form = ( {SetCalcResult}: any ) => {

  const { 
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    resolver: zodResolver(dataSchema),
  })

  const onSubmit = async (formData: IFormValues) => {
    if (formData.days) {
      formData.days = formData.days.split(", ")
    } else {
      delete formData.days
    }
    const {data} = await api.post("/", formData)
    SetCalcResult(data)
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <h1>Simule sua Antecipação</h1>
      <Input
        id='amount'
        type="number"
        label='Informe o valor da venda *'
        placeholder='15000'
        requirements="mínimo de 1000 reais"
        error={errors?.amount}
        register={register}
      />
      <Input
        id='installments'
        type="number"
        label='Em quantas parcelas *'
        placeholder='10'
        requirements="máximo de 12 parcelas"
        error={errors?.installments}
        register={register}
      />
      <Input
        id='mdr'
        type="number"
        label='Informe o percentual de MDR *'
        placeholder='4'
        requirements="mínimo de 0.1 de percentual"
        error={errors?.mdr}
        register={register}
      />
      <Input
        id="days"
        type="string"
        label="Dias de antecipação (opcional)"
        placeholder="1, 15, 30, 90"
        requirements="números separados por virgula e espaço"
        error={errors?.days}
        register={register}
      />
      <button type="submit"> Calcular</button>
    </StyledForm>
  )
}

export default Form