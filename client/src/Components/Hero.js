import styled from "styled-components";
import { scrollToSection } from './Helpers'

const HeroContainer = styled.div`
  height: 50em;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4442ad;
`;
const ContentContainer = styled.div`
  background: white;
  width: 700px;
  padding: 10px 16px;
  margin-top: 17vh;
  @media screen and (max-width: 500px){
    width: 300px;
    margin-top: 1vh;
    padding: 1em 1em;
  }
`;
const Text = styled.p`
  margin: 0;
  padding: 0.5em;
  font-size: 60px;
  text-align: justify;
  @media screen and (max-width: 500px){
    font-size: 1.5em;
  }
`;


const Hero = (props) => (
  <HeroContainer ref={props.innerRef}>
    <ContentContainer>
      <div>
        <Text>
          Hi, I’m Emma.
          <br />A UI/UX designer and full stack web developer based in Montreal,
          Canada.
        </Text>
        
      </div>
    </ContentContainer>
  </HeroContainer>
);

export default Hero;
