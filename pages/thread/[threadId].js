import axios from "axios";
import styled from "styled-components";
import Input from "../../components/partials/Input";
import FormButton from "../../components/partials/FormButton";
import Form from "../../components/partials/Form";
import threadDateHelper from "../../utils/threadDateHelper";
import jwt from "jsonwebtoken";
import decodeCookie from "../../utils/getUserFromCookie";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column:
`;

const Card = styled.div`
  width: 75vw;
  border-radius: 15px;
  background-color: #919191;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3px;
  max-height: 500px;
  overflow-y: scroll;
`;

const Title = styled.div`
  text-align: center;
  margin: 10px 0;
  font-weight: bold;
`;

const Status = ({isOver}) => {
  
  const StatusContainer = styled.div`
    padding: 3px;
    border-radius: 25px;
    background-color: ${isOver ? "#f8a5a5" : "#6f9cf8"};
    text-align: center;
    color: black;
  `;
  
  return <StatusContainer>{isOver ? "OVER" : "ON GOING"}</StatusContainer>
  
};

const MessageCard = styled.div`
  width: 90%;
  border-radius: 20px;
  padding: 10px 0;
  margin: 10px;
  background-color: #bfbfbf;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #373737;
`;

export default function handler({thread, isCreator}){
  const threadDetail = threadDateHelper(thread);
  
  
  return (
    
   <Wrapper>
    <Card>
      <Title>{thread.title}</Title>
        {(threadDetail.hasPast ? <Status isOver={true}/> : <Status isOver={false}/>)}
        {(!threadDetail.hasPast && !isCreator) ? (
      <Form action="/api/message/add" method="POST">
        <Input type="hidden" name="id" value={thread._id}/>
        <Input placeholder="Enter your message here..." name="message"/>
        <FormButton type="submit">Send</FormButton>
      </Form>) : (
        <>
        <h3 style={{
          textAlign: 'center',
          color: "#373737"
        }}>Messages Sent</h3>
        {thread.messages.map(el => {
          return (
            <MessageCard key={el._id}>{el.message}</MessageCard>
          )
        })}
        </>
      )}
    </Card>
   </Wrapper>
  
  );
}

export async function getServerSideProps(ctx){
  const {req, res} = ctx;
  const decodedCookie = decodeCookie(req.cookies.token || jwt.sign({
    username: 'guest',
    email: 'guest',
    password: 'guest',
    profile: 'giest'
  }, process.env.PRIVATE_KEY));
  const axThread = await axios.post(`${process.env.BASE_URL}/api/thread/search`, {
    id: ctx.params.threadId
  });
  const thread = axThread.data;
  return {
    props: {
      thread: thread.data || null,
      isCreator: thread.data.createdById == decodedCookie.id
    }
  }
}