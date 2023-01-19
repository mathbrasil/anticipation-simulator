interface IResponseData {
  days: {
    1: number
    15: number
    30: number
    90: number
  }
}

const ResultsComponent = ({days}: IResponseData) => {
  
  return (
    <div>
      <h2>VOCÊ RECEBERÁ:</h2>
      <p>Amanhã: <span>R$ {days[1]},00</span></p>
      <p>Em 15 dias: <span>R$ {days[15]},00</span></p>
      <p>Em 30 dias: <span>R$ {days[30]},00</span></p>
      <p>Em 90 dias: <span>R$ {days[90]},00</span></p>
    </div>
  )
}

export default ResultsComponent