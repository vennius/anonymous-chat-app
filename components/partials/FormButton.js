import styled from "styled-components";

const FormButton = styled.button`
  font-weight: bold;
  width: 25vw;
  border-radius: 20px;
  background-color: #484848;
  outline: none;
  border: none;
  color: #cdcdcd;
  text-align: center;
  width: 30%;
  padding: 10px 40px;
  border: 1px solid #7b7b7b;
  transition: .15s;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
    opacity: 50%;
  }
`;

export default FormButton;