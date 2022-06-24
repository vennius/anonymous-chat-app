import styled from "styled-components";
import Image from 'next/image';

const UserProfile = ({
  src
}) => {
  return(

    <img src={src} width="100" height="100" style={{
      borderRadius: "50%"
    }}/>

  );
}

export default UserProfile;