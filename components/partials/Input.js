import styled from "styled-components";

const Input = styled.input`
  width: 80%;
  padding: 10px 3px;
  border: 1px solid #727272;
  margin: 10px auto;
  padding: 15px;
  border-radius: 15px;
  background-color: #4e4e4e;
  color: #fff;
  text-align: center;
  
  &::placeholder{
    color: #cacaca;
    font-size: 12px;
  }
  
  &:focus{
    outline: none;
  }
`;

export default Input;