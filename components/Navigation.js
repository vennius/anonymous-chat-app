import styled from "styled-components";
import Link from "next/link";

const NavWrapper = styled.nav`
width: 100vw;
height: 45px;
background-color: #1d1d1d;
display: flex;
color: #ffffff;
justify-content: space-evenly;
align-items: center;
text-decoration: underline;
padding: 10px;
`;

const Navigation = () => {
  return (
  <NavWrapper>
    <Link href={"/create"}>Create Thread</Link>
    <Link href={"/"}>Home</Link>
    <Link href={"/edit"}>Edit Profile</Link>
  </NavWrapper>
  );
}

export default Navigation;