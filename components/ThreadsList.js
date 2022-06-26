import styled from "styled-components";
import Link from "next/link";
import { format, compareAsc, isPast } from 'date-fns';

const Container = styled.div`
  width: 300px;
  margin: 20px auto;
  border-radius: 20px;
  background-color: #616161;
  -webkit-box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.35); 
  box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.35);
  box-sizing: border-box;
  padding-top: 10px;
  color: #000;
`;

const CardsWrapper = styled.div`
  max-height: 500px;
  overflow-y: scroll;
  padding: 0 10px 10px 10px;
`;

const Card = styled.div`
  width: 100%;
  padding: 15px;
  background-color: #bcbcbc;
  margin: 10px 0;
  border-radius: 15px;
  transition: .2s ease;
  box-sizing: border-box;
  -webkit-box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.17); 
  box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.17);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  &:hover,
  &:active,
  &:focus{
    transform: scale(1.02);
  }
`;

const Title = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

const ThreadTitle = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 15px;
`;

const TimeCreated = styled.div`
  font-size: 12.5px;
  text-align: center;
  color: #3d3d3d;
  margin: 5px 0;
`;

const Status = ({isOver}) => {
  
  const StatusContainer = styled.div`
    padding: 3px;
    border-radius: 25px;
    background-color: ${isOver ? "#f8a5a5" : "#6f9cf8"};
  `;
  
  return <StatusContainer>{isOver ? "OVER" : "ON GOING"}</StatusContainer>
  
};

const TimeEnded = TimeCreated;

const ThreadsList = ({data}) => {
  
  /*
    dateCreated format = date:month:year
  */
  
  
  return(
    <Container>
      <Title>Your Threads</Title>
      <CardsWrapper>
        {data.map(thread => {
        const nowDate = new Date();
        const userDate = new Date(thread.timeEnded.year, thread.timeEnded.monthNum, thread.timeEnded.date, thread.timeEnded.hour, thread.timeEnded.minute, thread.timeEnded.second);
        
        /*
        const date = d.getDate();
        const month = d.getMonth();
        const year = d.getFullYear();
        const second = d.getSeconds();
        const minute = d.getMinutes();
        const hour = d.getHours();
        */
        
        /*
        new Date(year, month, day, hours, minutes, seconds, milliseconds);
        */
        
        return (
        <Link key={thread.id} href={`/threads/${thread.id}`}>
          <Card>
          <ThreadTitle>{thread.title}</ThreadTitle>
          <TimeCreated>
            {thread.timeCreated.date}-{thread.timeCreated.month}-{thread.timeCreated.year} | {thread.timeCreated.hour}:{thread.timeCreated.minute}
          </TimeCreated>
          <TimeEnded>
            <b>{isPast(userDate) ? "Ended at" : "Until"}: </b>{thread.timeEnded.date}-{thread.timeEnded.month}-{thread.timeEnded.year} | {thread.timeEnded.hour}:{thread.timeEnded.minute}
          </TimeEnded>
          <Status isOver={isPast(userDate)}/>
          </Card>
        </Link>
        );
        
        })
        }
      </CardsWrapper>
    </Container>
  );
}

export default ThreadsList;