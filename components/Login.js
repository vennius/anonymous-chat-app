import styled from "styled-components";
import Link from "next/link";
import Input from "./partials/Input";
import Form from "./partials/Form";
import FormButton from "./partials/FormButton";


const LoginText = styled.div`
  text-align: center;
  font-weight: bold;
  margin: 15px 0;
  font-size: 20px;
`;

const RegisterLink = styled.span`
  color: white;
  text-decoration: underline;
`;


const Login = () => {
  return(
    
    <>
    <LoginText>Login Here</LoginText>
    <Form>
      <Input placeholder={"Enter your email or username..."} type="email"/>
      <Input placeholder={"Enter your password..."} type="password"/>
      <div style={{
        fontSize: 12.5
      }}>Don't have an account yet? <RegisterLink><Link href="/register">Register</Link></RegisterLink></div>
      <FormButton type="submit">Login</FormButton>
    </Form>
    </>
  
  );
}

export default Login;