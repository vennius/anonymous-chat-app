//import Head from 'next/head'
//import Image from 'next/image'
//import styles from '../styles/Home.module.css'
import Navigation from "../components/Navigation";
import UserInfo from "../components/UserInfo";


export default function Home() {
  return (
    
    <>
      <Navigation>
        <a href={"/create"}>Create Thread</a>
        <a href={"/"}>Home</a>
        <a href={"/threads"}>Edit Profile</a>
      </Navigation>
      <div>
        <UserInfo profileLink={"https://picsum.photos/id/237/200/200"} name={"stevennius chandra"} totalThreads={"5"}/>
      </div>
    </>
    
  );
}
