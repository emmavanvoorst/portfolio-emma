import React, { useState } from "react";

import styled from "styled-components";
import WebDev from "./Portfolio/WebDev";
import UiUx from "./Portfolio/UiUx";
import GraphicDesign from "./Portfolio/GraphicDesign";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10em;
  height: fit-content;
  background-position: center;
`;
const SectionContainer = styled.div`
  display: flex;
  margin-bottom: 2em;
`;
const Button = styled.button`
  all: unset;
  cursor: pointer;
  font-size: 1.5rem;
  margin: 2em 0 1em 2em;
  color: ${(props) =>
  props.active === props.componentName ? "#4442ad" : "lightgrey"};
  transition: 300ms;
  position: relative;
  &:hover {
    color: #4442ad;
  }
  &::before {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #4442ad;
    opacity: ${(props) => (props.active === props.componentName ? 1 : 0)};
    visibility: ${(props) => (props.active === props.componentName ? "visible" : "hidden")};
    transition: opacity 300ms, visibility 300ms;
  }
`;

const Portfolio = ({ innerRef }) => {
  const [active, setActive] = useState("WebDev");

  const handleClick = (component) => {
    setActive(component);
  };

  return (
    <Container ref={innerRef}>
      <SectionContainer>
        <Button
          onClick={() => handleClick("WebDev")}
          active={active}
          componentName="WebDev"
        >
          Web Dev
        </Button>
        <Button
          onClick={() => handleClick("UiUx")}
          active={active}
          componentName="UiUx"
        >
          UX/UI
        </Button>
        <Button
          onClick={() => handleClick("GraphicDesign")}
          active={active}
          componentName="GraphicDesign"
        >
          Graphic Design
        </Button>
      </SectionContainer>
      {active === "WebDev" && <WebDev />}
      {active === "UiUx" && <UiUx />}
      {active === "GraphicDesign" && <GraphicDesign />}
    </Container>
  );
};

export default Portfolio;
