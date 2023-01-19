import { useState } from "react"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import dataSchema from './validators'

import InputComponent from './components/InputComponent'
import ResultsComponent from './components/ResultsComponent'
import api from "./services/api"

import './App.css'

interface IFormValues {
  amount: string
  installments: string
  mdr: string
}

function App() {

  const [calcResult, SetCalcResult] = useState({
      1: 0,
      15: 0,
      30: 0,
      90: 0,
  })

  const { 
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    resolver: zodResolver(dataSchema),
  })

  const onSubmit = async (formData: IFormValues) => {
    const {data} = await api.post("/", formData)
    SetCalcResult(data)
  }

  return (
    <main className="App">
      <section>
        <div>
          <h1>Simule sua Antecipação</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputComponent
              id='amount'
              register={register}
              error={errors?.amount}
              placeholder='R$ 1.000,00'
              label='Informe o valor da venda *'
            />
            <InputComponent
              id='installments'
              register={register}
              error={errors?.installments}
              placeholder='10'
              label='Em quantas parcelas *'
            />
            <InputComponent
              id='mdr'
              register={register}
              error={errors?.mdr}
              placeholder='4'
              label='Informe o percentual de MDR *'
            />
            <button type="submit">Cadastrar</button>
          </form>
        </div>
        <ResultsComponent days={calcResult} />
      </section>
    </main>
  )
}

export default App
