import { useState } from "react";
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

const Registered = styled.div`
  width: 80%;
  background-color: #a1a1a1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: black;
  border: 1px solid black;
  border-radius: 20px;
  margin: 10px auto;
  padding: 10px 0;
`;

const Login = ({registered}) => {
  const [input, setInput] = useState({});
  
  const setInputState = (e) => {
    console.log([e.target.name]);
    setInput({...input, [e.target.name]: e.target.value});
  }
  
  return(
    
    <>
    
    {registered ? <Registered>You have been registered</Registered> : ""}
    
    <LoginText>Login Here</LoginText>
    <Form action="/api/user/check" method="POST">
      <Input placeholder={"Enter your email or username..."} type="text" name="usernameOrEmail" onChange={setInputState}/>
      <Input placeholder={"Enter your password..."} type="password" name="password" onChange={setInputState}/>
      <div style={{
        fontSize: 12.5
      }}>Don't have an account yet? <RegisterLink><Link href="/register">Register</Link></RegisterLink></div>
      <FormButton type="submit">Login</FormButton>
    </Form>
    </>
  
  );
}

export default Login;