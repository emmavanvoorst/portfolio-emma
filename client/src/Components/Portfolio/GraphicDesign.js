import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BiRightArrow } from "react-icons/bi";

const Container = styled.div`
  display: block;
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ButtonFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1em;
`;
const ImageWrapper = styled.div`
  position: relative;
  display: inline-block;
`;
const Image = styled.img`
  max-width: 50vw;
  border-radius: 10px;
  transition: 500ms;
  filter: ${(props) => (props.isHovered ? "brightness(40%)" : "none")};
`;
const StyledLink = styled(Link)`
  all: unset;
`;
const Button = styled.button`
  all: unset;
  font-size: 1.5rem;
  margin-bottom: 0.5em;
  cursor: pointer;
  &:hover {
    color: blue;
  }
  @media screen and (max-width: 500px){
    font-size: 1rem;
  }
`;
const Text = styled.div`
  margin-right: 0.5em;
`;
const Proj = styled.div`
color: grey;
@media screen and (max-width: 500px){
  font-size: 0.8rem;
  margin-bottom: 0.5em;
}
`
const ButtonContainer = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;
  justify-content: space-between;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 2rem;
  @media screen and (max-width: 500px){
    font-size: 1rem;
  }
`;
const GitHubButton = styled.button`
  all: unset;
  cursor: pointer;
  color: white;
  width: 9em;
  height: 2em;
  margin-left: 0.5em;
  transition: 300ms;
  &:hover {
    scale: calc(1.1);
  }
`;
const ProjectButton = styled.button`
  all: unset;
  cursor: pointer;
  color: white;
  width: 9em;
  height: 2em;
  transition: 300ms;
  &:hover {
    scale: calc(1.1);
  }
`;

const GraphicDesign = () => {
  const [showGoya, setShowGoya] = useState(true);
  const [showNike, setShowNike] = useState(false);
  const [isHovered, setisHovered] = useState(false);

  const handleCalendArtClick = () => {
    setShowGoya(true);
    setShowNike(false);
  };

  const handleECommerceClick = () => {
    setShowNike(true);
    setShowGoya(false);
  };

  return (
    <Container>
      <Flex>
        <ImageWrapper
          onMouseEnter={() => setisHovered(true)}
          onMouseLeave={() => setisHovered(false)}
        >
          {isHovered && showGoya && (
            <ButtonContainer>

              <StyledLink to="https://www.behance.net/gallery/177163255/GOYA-Brand-Redesign">
                <ProjectButton>
                  <ButtonFlex>
                    <Text>View Project</Text>
                    <BiRightArrow size={23} />
                  </ButtonFlex>
                </ProjectButton>
              </StyledLink>
            </ButtonContainer>
          )}
   {isHovered && showNike && (
            <ButtonContainer>

              <StyledLink to="https://www.behance.net/gallery/177163173/Nike-Catalogue">
                <ProjectButton>
                  <ButtonFlex>
                    <Text>View Project</Text>
                    <BiRightArrow size={23} />
                  </ButtonFlex>
                </ProjectButton>
              </StyledLink>
            </ButtonContainer>
          )}

          {showGoya && (
            <Image src="../imgs/GoyaMockup.PNG" isHovered={isHovered} />
          )}
          {showNike && (
            <Image src="../imgs/NikeMockup.png" isHovered={isHovered} />
          )}
        </ImageWrapper>
        <ProjectContainer>
          <Proj>Projects</Proj>
          <Button active={showGoya} onClick={handleCalendArtClick}>
            Goya Packaging Redesign
          </Button>
          <Button active={showNike} onClick={handleECommerceClick}>
            Nike Catalogue
          </Button>
        </ProjectContainer>
      </Flex>
    </Container>
  );
};

export default GraphicDesign;