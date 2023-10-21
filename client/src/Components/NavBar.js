import React from "react";
import styled from "styled-components";
import { scrollToSection } from "./Helpers";

import skills from "../imgs/skills.png"
import portfolio from "../imgs/portfolio_ico.png"
import contact from "../imgs/contact.png"

const NavContainer = styled.div`
  position: fixed;
  background-color: #4442ad;
  height: 6em;
  width: 100%;
  z-index: 2000;
  border-bottom: 2px solid #31d8ef;
  color: white;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavTitle = styled.p`
  font-size: 1.6rem;
  display: inline;
  cursor: pointer;
  transition: 200ms;
  &:hover {
    color: #31d8ef;
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const NavTitleShort = styled.p`
font-size: 2em;
margin-left: 0.5em;
@media screen and (min-width: 500px) {
    display: none;
  }
`


const NavItems = styled.p`
  display: inline;
  padding: 2em;
  cursor: pointer;
  transition: 200ms;
  &:hover {
    color: #31d8ef;
  }
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
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const NavIconContainer = styled.div`
 @media screen and (min-width: 500px) {
    display: none;
  }
`
const NavIcon = styled.img`
height: 2em;
margin-right: 2em;
cursor: pointer;
`

const NavBar = (props) => (
  <NavContainer>
    <NavContent>
      <NavTitle onClick={() => scrollToSection(props.hero)}>
        EMMA VAN VOORST
      </NavTitle>
      <NavTitleShort>EVV</NavTitleShort>
      <NavItemContainer>
        <NavItems onClick={() => scrollToSection(props.skills)}>
          SKILLS
        </NavItems>
        <NavItems onClick={() => scrollToSection(props.portF)}>
          PORTFOLIO
        </NavItems>
        <NavItems onClick={() => scrollToSection(props.contact)}>
          CONTACT
        </NavItems>
      </NavItemContainer>
      <NavIconContainer>

<NavIcon src={skills} onClick={() => scrollToSection(props.skills)}/>
<NavIcon src={portfolio} onClick={() => scrollToSection(props.portF)}/>
<NavIcon src={contact} onClick={() => scrollToSection(props.contact)}/>
      </NavIconContainer>
    </NavContent>
  </NavContainer>
);
export default NavBar;
