import styled from "styled-components";


const ContentContainer = styled.div`
  background: white;
  width: 700px;
  padding: 16px;
  margin-top: 17vh;
`;

const HeroContainer = styled.div`
  height: 120vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4442ad;
`;

const Text = styled.p`
  margin: 0;
  padding: 0.5em;
  font-size: 60px;
  text-align: justify;
`;

const FlexBox = styled.div`
    display: flex;
    justify-content: end;
`

const Button = styled.button`
  all: unset;
  background-color: #4442ad;
  color: white;
  font-size: 20px;
  height: 3em;
  width: 15em;
  margin-right: 1em;
  text-align: center;
  border-radius: 1em;
  padding: 8px 16px;
`;


const Hero = () => (
  <HeroContainer>
    <ContentContainer>
      <div>
        <Text>
          Hi, I’m Emma.
          <br />A UI/UX designer and front end web developer based in Montreal,
          Canada.
        </Text>
        <FlexBox>
            <Button>SEE MY PORTFOLIO</Button>
        </FlexBox>
        
      </div>
    </ContentContainer>
  </HeroContainer>
);

export default Hero;
