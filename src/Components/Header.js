import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavContainer = styled.div`
  position: fixed;
  background-color: #4442ad;
  height: 15vh;
  width: 100%;
  border: 2px solid #31d8ef;
  color: white;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

const NavTitle = styled.p`
  display: inline;
`;

const NavItems = styled.p`
  display: inline;
  padding: 2em;
`;

const NavContent = styled.div`
    width: 732px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
`;

const NavItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 360px;
`;

const Header = () => (
  <NavContainer>
    <NavContent>
      <NavTitle>EMMA VAN VOORST</NavTitle>
      <NavItemContainer>
        {/* <NavItems>ABOUT</NavItems> */}
       <Link to={#Portfolio}><NavItems>PORTFOLIO</NavItems></Link> 
        <NavItems>CONTACT</NavItems>
      </NavItemContainer>
    </NavContent>
  </NavContainer>
);
export default Header;
