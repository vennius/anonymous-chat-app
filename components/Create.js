import styled from "styled-components";
import Input from "./partials/Input";
import Label from "./partials/Label";

const TitleWrapper = styled.div`
  text-align: center;
  font-size: 25px;
  margin: 20px 0;
  font-weight: bold;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0;
  margin: 0;
`;

const Create = () => {
  return (
  <>
    <TitleWrapper>Create Thread</TitleWrapper>
    <Form>
      <Input placeholder={"Enter your Thread title..."}/>
    </Form>
  </>
  );
}

export default Create;