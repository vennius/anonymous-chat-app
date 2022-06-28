import styled from "styled-components";
import Input from "./partials/Input";
import Label from "./partials/Label";
import CreateButton from "./partials/CreateButton";
import Form from "./partials/Form";

const TitleWrapper = styled.div`
  text-align: center;
  font-size: 25px;
  margin: 20px 0;
  font-weight: bold;
`;

const Select = styled.select`
  width: 75%;
  border: none;
  outline: none;
  color: #c9c9c9;
  background-color: #424242;
  border-radius: 15px;
  padding: 5px 0;
  margin: 10px 0;
  text-align: center;
`;

const Create = () => {
  return (
  <>
    <TitleWrapper>Create Thread</TitleWrapper>
    <Form>
      <Input placeholder={"Enter your Thread title..."}/>
      <Label>Available for: </Label>
      <Select name="time">
        <option value="1">1 Hour</option>
        <option value="3">3 Hours</option>
        <option value="5">5 Hours</option>
        <option value="8">8 Hours</option>
        <option value="12">12 Hours</option>
        <option value="24">24 Hours</option>
      </Select>
      <CreateButton type="submit">Create</CreateButton>
    </Form>
  </>
  );
}

export default Create;