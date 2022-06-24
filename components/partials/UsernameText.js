import styled from "styled-components";

const UsernameText = styled.div`
  margin: 8px;
  font-size: 15px;
  color: #ffffff;
  font-weight: bold;
  &::before{
    content: '@';
  }
`;

export default UsernameText;