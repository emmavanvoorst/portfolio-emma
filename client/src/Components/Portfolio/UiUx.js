import React, {useState} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BiRightArrow } from "react-icons/bi";

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
const ButtonFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
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
const StyledLink = styled(Link)`
  all: unset;
`;
const Text = styled.div`
  margin-right: 0.5em;
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
`
const ProjectButton = styled.button`
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
`


const Example = ({ data }) => <img src={`data:image/jpeg;base64,${data}`} />
const UiUx = () => {
  const [showDeepSight, setShowDeepSight] = useState(true);
  const [showMapleBank, setShowMapleBank] = useState(false);
  const [showPetVC, setShowPetVC] = useState(false);
  const [isHovered, setisHovered] = useState(false);

  const handleDeepSightClick = () => {
  setShowDeepSight(true);
  setShowMapleBank(false);
  setShowPetVC(false);

};

const handleMapleBankClick = () => {
  setShowMapleBank(true);
  setShowDeepSight(false)
  setShowPetVC(false);
};

const handlePetVCClick = () => {
  setShowDeepSight(false);
  setShowMapleBank(false);
  setShowPetVC(true);
};


return (
  <Container>
   <Flex>
      <ImageWrapper
          onMouseEnter={() => setisHovered(true)}
          onMouseLeave={() => setisHovered(false)}
        >
          {isHovered && showDeepSight && (
            <ButtonContainer>

              <StyledLink to="https://www.behance.net/gallery/140006533/DeepSight-Web-Console">
                <ProjectButton>
                  <ButtonFlex>
                    <Text>View Project</Text>
                    <BiRightArrow size={23} />
                  </ButtonFlex>
                </ProjectButton>
              </StyledLink>
            </ButtonContainer>
          )}
          {isHovered && showMapleBank && (
            <ButtonContainer>
               <StyledLink to="https://www.behance.net/gallery/176860569/Maple-Bank-Investment-App">
                <ProjectButton>
                  <ButtonFlex>
                    <Text>View Project</Text>
                    <BiRightArrow size={23} />
                  </ButtonFlex>
                </ProjectButton>
              </StyledLink>
            </ButtonContainer>
          )}
            {isHovered && showPetVC && (
            <ButtonContainer>
               <StyledLink to="https://www.behance.net/gallery/177162925/City-of-Vancouver-Lost-Pet-Feature">
                <ProjectButton>
                  <ButtonFlex>
                    <Text>View Project</Text>
                    <BiRightArrow size={23} />
                  </ButtonFlex>
                </ProjectButton>
              </StyledLink>
            </ButtonContainer>
          )}
      {showDeepSight && <Image src="../imgs/deepsight.PNG" isHovered={isHovered}/>}
      {showMapleBank && <Image src="../imgs/MapleBank.PNG" isHovered={isHovered}/>}
      {showPetVC && <Image src="../imgs/petvc.PNG" isHovered={isHovered}/>}
      </ImageWrapper>
    <ProjectContainer>
      <div>Projects</div>
    <Button active={showDeepSight} onClick={handleDeepSightClick}>DeepSight Web Console</Button>
    <Button active={showMapleBank} onClick={handleMapleBankClick}>Maple Bank</Button>
    <Button active={showPetVC} onClick={handlePetVCClick}>Vancouver Lost Pet Feature</Button>
   </ProjectContainer>
   </Flex>
  </Container>
);
};

export default UiUx;
