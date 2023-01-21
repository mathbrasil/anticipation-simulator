import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 1rem;

  label {
    font-size: 14px;
  }

  input {
    height: 2.2rem;

    padding-left: .5rem;
  }

  span {
    font-size: 12px;
    color: rgba(165, 164, 164, 0.87);
  }

  /* Removing type number input's arrows */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type=number] {
    -moz-appearance: textfield;
  }

  @media screen and (max-width: 760px) {
    
  }
`

export default InputContainer