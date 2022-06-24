import styled from "styled-components";
const Container = styled.div`
color: #ffffff;
display: flex;
justify-content: space-evenly;
align-items: center;
`;

const TextContainer = styled.div`
padding: 6px;
background-color: #99e9fd;
border-radius: 20px;
text-align: center;
margin-right: 15px;
color: #282828;
`;

const ValueContainer = styled.div`
padding: 3px;
background-color: #fd8181;
border-radius: 20px;
color: #282828;
display: flex;
align-items: center;
justify-content: center;
height: 25px;
`;

const ThreadsCount = ({count}) => {
  return (
  
  <Container>
    <TextContainer>Threads</TextContainer>
    <ValueContainer>{count}</ValueContainer>
  </Container>
  
  );
}

export default ThreadsCount;