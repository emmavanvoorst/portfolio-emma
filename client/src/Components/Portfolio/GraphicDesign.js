import React, {useState} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Container = styled.div`
display: block;
`
const Flex = styled.div`
display: flex;
justify-content: space-between;
`
const ProjectContainer = styled.div`
display: flex;
flex-direction: column;
margin-left: 1em;
`
const ImageContainer = styled.div`
position: relative;

`
const Image = styled.img`
  max-width: 50vw;
  border-radius: 10px;
`;
const Button = styled.button`
all:unset;
font-size: 1.5rem;
margin-bottom: 0.5em;
cursor: pointer; 
&:hover {
    color: blue;
  }
`;
const GitHubButton = styled.button`
all: unset;
position: absolute;
background-color: white;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: white;
`
const ProjectButton = styled.button`
all: unset;
position: absolute;
background-color: white;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: white;
`
const GraphicDesign = () => {
  const [showCalendArt, setShowCalendArt] = useState(true);
  const [showECommerce, setShowECommerce] = useState(false);

  const handleCalendArtClick = () => {
  setShowCalendArt(true);
  setShowECommerce(false)
};

const handleECommerceClick = () => {
  setShowECommerce(true);
  setShowCalendArt(false)
};

return (
  <Container>
   <Flex>
      <ImageContainer>
      <GitHubButton>View Project</GitHubButton>
      <ProjectButton>GitHub</ProjectButton>
      {showCalendArt && <Image src="../imgs/GoyaMockup.png" />}
      {showECommerce && <Image src="../imgs/NikeMockup.png" />}
      </ImageContainer>
    <ProjectContainer>
      <div>Projects</div>
    <Button active={showCalendArt} onClick={handleCalendArtClick}>Goya Rebrand</Button>
    <Button active={showECommerce} onClick={handleECommerceClick}>Nike Catalogue</Button>
   </ProjectContainer>
   </Flex>
  </Container>
);
};

export default GraphicDesign;