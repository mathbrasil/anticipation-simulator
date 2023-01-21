import styled from "styled-components";

const ResultsContainer = styled.div`
  h2 {
    font-size: 20px;
    font-style: italic;

    border-bottom: 1px solid rgba(99, 98, 98, 0.87);
    padding-bottom: .5rem;
  }

  p {
    margin-top: 1.6rem;
    
    font-style: italic;
  }

  span {
    font-weight: 600;
  }

  @media screen and (max-width: 760px) {
    h2 {
      margin-top: 1rem;
    }
  }
`

export default ResultsContainer