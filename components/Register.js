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
    <Form method="POST" action="/api/user/add">
      <Input placeholder="Enter your email..." type="email" name="email" required="required" minlength="10"/>
      <Input placeholder="Enter your username..." type="text" name="username" required=""/>
      <Input placeholder="Enter your password..." name="password" type="password" required="required"/>
      <div style={{
        fontSize: 12.5
      }}>Already have an account? <RegisterLink><Link href="/login">Login</Link></RegisterLink></div>
      <FormButton type="submit">Register</FormButton>
    </Form>
  </>
  );
}

export default Register;