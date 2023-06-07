import React from "react";
import styled from "styled-components";
import { scrollToSection } from './Helpers'


const NavContainer = styled.div`
  position: fixed;
  background-color: #4442ad;
  height: 15vh;
  width: 100%;
  z-index: 0;
  border: 2px solid #31d8ef;
  color: white;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

const NavTitle = styled.p`
  display: inline;
  cursor: pointer;
`;

const NavItems = styled.p`
  display: inline;
  padding: 2em;
  cursor: pointer;
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


const Header = (props) => (
 
  <NavContainer>
    <NavContent>
      <NavTitle onClick= {()=> scrollToSection(props.hero)}>EMMA VAN VOORST</NavTitle>
      <NavItemContainer>
        {/* <NavItems>ABOUT</NavItems> */}
      <NavItems onClick= {()=> scrollToSection(props.portF)}>PORTFOLIO</NavItems>
        <NavItems onClick= {()=> scrollToSection(props.contact)}>CONTACT</NavItems>
      </NavItemContainer>
    </NavContent>
  </NavContainer>
);
export default Header;
