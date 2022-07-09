import { isPast } from "date-fns";

export default function threadDateHelper(thread) {
  const {
    createdAt,
    endedAt
  } = thread;
  
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  
  const createdSplit = createdAt.split(" ");
  const endedSplit = endedAt.split(" ");

  const [createdDate,
    createdMonth,
    createdYear] = createdSplit[0].split("/"); // d/m/y
  const [createdHours,
    createdMinutes,
    createdSeconds] = createdSplit[1].split(":"); // h:m:s
  const [endedDate,
    endedMonth,
    endedYear] = endedSplit[0].split("/"); // d/m/y
  const [endedHours,
    endedMinutes,
    endedSeconds] = endedSplit[1].split(":"); // h:m:s

  const created = new Date(createdYear, createdMonth-1, createdDate, createdHours, createdMinutes, createdSeconds);
  const ended = new Date(endedYear, endedMonth-1, endedDate, endedHours, endedMinutes, endedSeconds);
  
  return {created, ended, hasPast: isPast(ended), monthNameCreated: months[created.getMonth()], monthNameEnded: months[ended.getMonth()]}
}