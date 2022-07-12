import styled from "styled-components";

const Input = styled.input`
  width: 90%;
  padding: 10px 3px;
  border: 1px solid #727272;
  margin: 10px auto;
  padding: 15px;
  border-radius: 15px;
  background-color: #4e4e4e;
  color: #fff;
  text-align: center;
  
  &::placeholder{
    color: rgbs(182,182,182,.75);
    font-size: 12px;
  }
  
  &:focus{
    outline: none;
  }
`;

export default Input;