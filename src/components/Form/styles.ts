import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  h1 {
    margin-bottom: .5rem;
  }

  button {
    height: 2.5rem;
    margin-top: 1rem;

    border: none;
    border-radius: 4px;

    font-size: 1.12rem;

    cursor: pointer;
    transition: .1s;

    :hover {
      filter: brightness(.7);
    }

    :active {
      transform: scale(.97);
    }
  }

  @media screen and (max-width: 760px) {
    
  }
`

export default StyledForm