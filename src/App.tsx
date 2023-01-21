import { useState } from "react"

import Form from "./components/Form"
import ResultsComponent from './components/Results'

import Global from "./styles/global"
import StyledMain from "./styles"



function App() {

  const [calcResult, SetCalcResult] = useState({
    1: 0,
    15: 0,
    30: 0,
    90: 0
  })

  return (
    <>
      <Global />
      <StyledMain className="App">
        <section>
          <div className="contentContainer formContainer">
            <Form SetCalcResult={SetCalcResult} />
          </div>
          <div className="contentContainer resultsContainer">
            <ResultsComponent results={calcResult} />
          </div>
        </section>
      </StyledMain>
    </>
  )
}

export default App
