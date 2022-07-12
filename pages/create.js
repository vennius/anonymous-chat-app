import { useState } from "react";
import Navigation from "../components/Navigation";
import Create from "../components/Create";

export default function CreateThread(){
  const [getTitle, setTitle] = useState("");
  const [getHours, setHours] = useState(1);
  /*console.log(getTitle);
  console.log(getHours);*/
  
  return (
    <>
      <Navigation/>
      <Create setHours={setHours} setTitle={setTitle}/>
    </>
  
  );
  
}
