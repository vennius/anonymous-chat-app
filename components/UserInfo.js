import styled from "styled-components";
import UserProfile from "./partials/UserProfile";
import ProfileWrapper from "./partials/ProfileWrapper";
import UsernameText from "./partials/UsernameText";
import ThreadsCount from "./partials/ThreadsCount";

/*
Data to display:
-profile picture 
-name
-threads made by user
*/

const UserInfo = ({name, profileLink, totalThreads}) => {
  return (
    
    <ProfileWrapper>
      <UserProfile src={profileLink}/>
      <UsernameText>{name}</UsernameText>
      <ThreadsCount count={totalThreads}/>
    </ProfileWrapper>
  
  );
}

export default UserInfo;