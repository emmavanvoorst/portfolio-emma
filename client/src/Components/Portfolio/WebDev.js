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
`;
const Text = styled.div`
  margin-right: 0.5em;
`;
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

const WebDev = () => {
  const [showCalendArt, setShowCalendArt] = useState(true);
  const [showECommerce, setShowECommerce] = useState(false);
  const [isHovered, setisHovered] = useState(false);

  const handleCalendArtClick = () => {
    setShowCalendArt(true);
    setShowECommerce(false);
  };

  const handleECommerceClick = () => {
    setShowECommerce(true);
    setShowCalendArt(false);
  };

  return (
    <Container>
      <Flex>
        <ImageWrapper
          onMouseEnter={() => setisHovered(true)}
          onMouseLeave={() => setisHovered(false)}
        >
          {isHovered && showCalendArt && (
            <ButtonContainer>
              <StyledLink to="https://github.com/emmavanvoorst/calendart">
                
                <GitHubButton>
                  {" "}
                  <ButtonFlex>
                    <Text>GitHub</Text>
                    <BiRightArrow size={23} />
                  </ButtonFlex>
                </GitHubButton>
              </StyledLink>

              <StyledLink to="https://calend-art.vercel.app/">
                <ProjectButton>
                  <ButtonFlex>
                    <Text>View Project</Text>
                    <BiRightArrow size={23} />
                  </ButtonFlex>
                </ProjectButton>
              </StyledLink>
            </ButtonContainer>
          )}
   {isHovered && showECommerce && (
            <ButtonContainer>
              <StyledLink to="https://github.com/emmavanvoorst/GadgetGo/tree/main">
                
                <GitHubButton>
                  {" "}
                  <ButtonFlex>
                    <Text>GitHub</Text>
                    <BiRightArrow size={23} />
                  </ButtonFlex>
                </GitHubButton>
              </StyledLink>

              <StyledLink to="https://gadget-go.vercel.app/">
                <ProjectButton>
                  <ButtonFlex>
                    <Text>View Project</Text>
                    <BiRightArrow size={23} />
                  </ButtonFlex>
                </ProjectButton>
              </StyledLink>
            </ButtonContainer>
          )}

          {showCalendArt && (
            <Image src="../imgs/calend-art.PNG" isHovered={isHovered} />
          )}
          {showECommerce && (
            <Image src="../imgs/e-commerce.PNG" isHovered={isHovered} />
          )}
        </ImageWrapper>
        <ProjectContainer>
          <div>Projects</div>
          <Button active={showCalendArt} onClick={handleCalendArtClick}>
            Calend'Art
          </Button>
          <Button active={showECommerce} onClick={handleECommerceClick}>
            GadgetGo e-Commerce Website
          </Button>
        </ProjectContainer>
      </Flex>
    </Container>
  );
};

export default WebDev;
