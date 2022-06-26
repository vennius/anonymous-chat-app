import Navigation from "../components/Navigation";
import UserInfo from "../components/UserInfo";
import ThreadsList from "../components/ThreadsList";
import { data } from "../dummy/threads"
import Link from "next/link";

export default function Home() {
  return (
    
    <>
      <Navigation>
        <Link href={"/create"}>Create Thread</Link>
        <Link href={"/"}>Home</Link>
        <Link href={"/threads"}>Edit Profile</Link>
      </Navigation>
      <UserInfo profileLink={"https://picsum.photos/id/237/200/200"} name={"stevennius chandra"} totalThreads={"5"}/>
      <ThreadsList data={data}/>
    </>
    
  );
}
