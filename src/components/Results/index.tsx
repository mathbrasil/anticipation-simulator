import ResultsContainer from "./styles"

interface IResponseData {
  results: {
    1: number
    15: number
    30: number
    90: number
  }
}

const ResultsComponent = ({results}: IResponseData) => {

  const newResults = Object.entries(results)
  
  return (
    <ResultsContainer>
      <h2>VOCÊ RECEBERÁ:</h2>

      {newResults.map((result) => {
          if (result[0] === "1") {
            return <p key={result[0]}>Amanhã: <span>R$ {result[1]},00</span></p>
          }
          return <p key={result[0]}>Em {result[0]} dias: <span>R$ {result[1]},00</span></p>
        })}
    </ResultsContainer>
  )
}

export default ResultsComponent