import { data } from "../dummy/threads"
import Navigation from "../components/Navigation";
import UserInfo from "../components/UserInfo";
import ThreadsList from "../components/ThreadsList";
import Link from "next/link";
import axios from "axios";
import decodeCookie from "../utils/getUserFromCookie";

export default function Home({data, threads}) {
  return (
    
    <>
      <Navigation/>
      <UserInfo profileLink={data.profile} name={data.username} totalThreads={threads.length}/>
      <ThreadsList data={threads}/>
    </>
    
  );
}

export async function getServerSideProps(ctx){
  const { req, res } = ctx;
  const decodedCookie = decodeCookie(req.cookies.token);
  const baseUrl = process.env.BASE_URL;
  const axRes = await axios.post(`${baseUrl}/api/user/search`, decodedCookie);
  console.log(axRes.data);
  const thRes = await axios.post(`${baseUrl}/api/thread/get`, {
    id: axRes.data.data[0]._id
  });
  console.log(thRes.data.data);
  return {
    props: {
      data: axRes.data.data[0] || null,
      threads: thRes.data.data || null
    }
  };
}