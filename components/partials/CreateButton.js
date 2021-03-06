import styled from "styled-components";

const CreateButton = styled.button`
  font-weight: bold;
  width: 25vw;
  border-radius: 20px;
  background-color: #484848;
  outline: none;
  border: none;
  color: #cdcdcd;
  text-align: center;
  width: 30%;
  padding: 15px;
  border: 1px solid #7b7b7b;
  transition: .3s;
  margin-top: 25px;
  &:hover{
    opacity: 50%;
  }
`;

export default CreateButton;