import styled from "styled-components";
import Form from "./partials/Form";
import Input from "./partials/Input";
import FormButton from "./partials/FormButton";
import Link from "next/link";

const RegisterLink = styled.span`
  color: white;
  text-decoration: underline;
`;

const RegisterText = styled.div`
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  margin: 15px 0;
`;

const Register = () => {
  return (
  <>
    <RegisterText>Register Here</RegisterText>
    <Form>
      <Input placeholder="Enter your email..." type="email"/>
      <Input placeholder="Enter your username..." type="text"/>
      <Input placeholder="Enter your password..." type="password"/>
      <div style={{
        fontSize: 12.5
      }}>Already have an account? <RegisterLink><Link href="/login">Login</Link></RegisterLink></div>
      <FormButton type="submit">Register</FormButton>
    </Form>
  </>
  );
}

export default Register;