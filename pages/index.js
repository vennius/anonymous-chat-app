import { data } from "../dummy/threads"
import Navigation from "../components/Navigation";
import UserInfo from "../components/UserInfo";
import ThreadsList from "../components/ThreadsList";
import Link from "next/link";

export default function Home() {
  return (
    
    <>
      <Navigation/>
      <UserInfo profileLink={"https://picsum.photos/id/237/200/200"} name={"stevennius chandra"} totalThreads={data.length}/>
      <ThreadsList data={data}/>
    </>
    
  );
}
