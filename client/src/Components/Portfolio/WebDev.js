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
  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }
`;
const Text = styled.div`
  margin-right: 0.5em;
`;
const Proj = styled.div`
  color: grey;
  @media screen and (max-width: 500px) {
    font-size: 0.8rem;
    margin-bottom: 0.5em;
  }
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
  @media screen and (max-width: 500px) {
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

const WebDev = () => {
  const [showCalendArt, setShowCalendArt] = useState(true);
  const [showECommerce, setShowECommerce] = useState(false);
  const [showAtelierEma, setShowAtelierEma] = useState(false);
  const [showPM, setShowPM] = useState(false);
  const [isHovered, setisHovered] = useState(false);

  const handleCalendArtClick = () => {
    setShowCalendArt(true);
    setShowECommerce(false);
    setShowAtelierEma(false);
    setShowPM(false);
  };

  const handleECommerceClick = () => {
    setShowECommerce(true);
    setShowCalendArt(false);
    setShowAtelierEma(false);
    setShowPM(false);
  };

  const handleAtelierEmaClick = () => {
    setShowAtelierEma(true);
    setShowECommerce(false);
    setShowCalendArt(false);
    setShowPM(false);
  };

  const handlePMClick = () => {
    setShowPM(true);
    setShowAtelierEma(false);
    setShowECommerce(false);
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
          {isHovered && showAtelierEma && (
            <ButtonContainer>
              <StyledLink to="https://github.com/emmavanvoorst/atelier_ema">
                <GitHubButton>
                  {" "}
                  <ButtonFlex>
                    <Text>GitHub</Text>
                    <BiRightArrow size={23} />
                  </ButtonFlex>
                </GitHubButton>
              </StyledLink>

              {/* <StyledLink to="https://gadget-go.vercel.app/">
                <ProjectButton>
                  <ButtonFlex>
                    <Text>View Project</Text>
                    <BiRightArrow size={23} />
                  </ButtonFlex>
                </ProjectButton>
              </StyledLink> */}
            </ButtonContainer>
          )}
          {isHovered && showAtelierEma && (
            <ButtonContainer>
              <StyledLink to="https://github.com/emmavanvoorst/pm_redesign">
                <GitHubButton>
                  {" "}
                  <ButtonFlex>
                    <Text>GitHub</Text>
                    <BiRightArrow size={23} />
                  </ButtonFlex>
                </GitHubButton>
              </StyledLink>
            </ButtonContainer>
          )}
          {showCalendArt && (
            <Image src="../imgs/calend-art.PNG" isHovered={isHovered} />
          )}
          {showECommerce && (
            <Image src="../imgs/e-commerce.PNG" isHovered={isHovered} />
          )}
          {showAtelierEma && (
            <Image src="../imgs/atelierema.PNG" isHovered={isHovered} />
          )}
          {showPM && (
            <Image src="../imgs/pm_redesign.PNG" isHovered={isHovered} />
          )}
        </ImageWrapper>
        <ProjectContainer>
          <Proj>Projects</Proj>
          <Button active={showCalendArt} onClick={handleCalendArtClick}>
            Calend'Art
          </Button>
          <Button active={showECommerce} onClick={handleECommerceClick}>
            GadgetGo e-Commerce Website
          </Button>
          <Button active={showAtelierEma} onClick={handleAtelierEmaClick}>
            Atelier Ema
          </Button>
          <Button active={showPM} onClick={handlePMClick}>
            Poubelle Magnifique Redesign
          </Button>
        </ProjectContainer>
      </Flex>
    </Container>
  );
};

export default WebDev;
