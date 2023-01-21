import styled from "styled-components";

const StyledMain = styled.main`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  section {
    display: flex;
    flex-wrap: wrap;

    width: 80%;
    min-width: 300px;
    max-width: 800px;

    -webkit-box-shadow: -4px 3px 49px -30px rgba(0,0,0,0.75);
    -moz-box-shadow: -4px 3px 49px -30px rgba(0,0,0,0.75);
    box-shadow: -4px 3px 49px -30px rgba(0,0,0,0.75);
    
    
    .contentContainer {
      padding: 5%;
    }

    .formContainer {
      width: 60%;
      padding: 5% 10%;

      background-color: #333333;
      border-radius: 6px 0 0 6px;
    }

    .resultsContainer {
      width: 40%;

      display: flex;
      flex-direction: column;
      justify-content: center;

      background-color: #292929;

      border-radius: 0 6px 6px 0;
    }
  }

  @media screen and (max-width: 760px) {
    section {
      margin: 2rem 0;

    .formContainer {
      border-radius: 6px 6px 0 0;
    }

    .resultsContainer {
      border-radius: 0 0 6px 6px;
    }
    }

    .formContainer {
      min-width: 100%;
    }
    .resultsContainer {
      min-width: 100%;
    }
  }
`

export default StyledMain