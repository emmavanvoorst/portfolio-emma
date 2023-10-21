import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3em;
  @media screen and (max-width: 500px){
   
  }
`;
const Title = styled.div`
  font-size: 3rem;
  margin-bottom: 1em;
  @media screen and (max-width: 500px){
    font-size: 2rem;
  }
`;
const Image = styled.img`
  max-height: 3em;
  margin-right: 1em;
  @media screen and (max-width: 500px){
    max-height: 2em;
  }
`;
const Logos = styled.div`
  display: flex;
  align-items: center;
  margin: 3em 0 3em 0;
  @media screen and (max-width: 500px){
    display: none;
  }
`;
const NextRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3em;
  @media screen and (max-width: 500px){
    display: none;
  }
`;
const Label = styled.div`
  margin-right: 4em;
  font-size: 1.5rem;
  @media screen and (max-width: 500px){
    font-size: 1rem;
  }
`;
const Line = styled.hr`
@media screen and (max-width: 500px){
    display:none;
  }
`
const SmallScreenLogos = styled.div`
display: flex;
  align-items: center;
  margin: 3em 0 3em 0;
`
const SmallNextRow = styled.div`
 display: flex;
  align-items: center;
  margin-bottom: 3em;
`
const SmallRowThree = styled.div`
display: flex;
  align-items: center;
  margin-bottom: 3em;
`
const Skills = ({ innerRef }) => (
  <Container ref={innerRef}>
    <div>
      <Title>Skills</Title>
      <Logos>
        <Image src={"../logos/html.png"} /> <Label>HTML 5</Label>
        <Image src={"../logos/css-3.png"} /> <Label>CSS 3</Label>
        <Image src={"../logos/bootstrap.png"} /> <Label>Bootstrap</Label>
      </Logos>
      <NextRow>
        <Image src={"../logos/java-script.png"} /> <Label>JavaScript</Label>
        <Image src={"../logos/atom-symbol.png"} /> <Label>React</Label>
      </NextRow>

      <Line />

      <Logos>
        <Image src={"../logos/adobe-photoshop.png"} /> <Label>Photoshop</Label>
        <Image src={"../logos/adobe-indesign.png"} /> <Label>Indesign</Label>
        <Image src={"../logos/adobe-illustrator.png"} />
        <Label>Illustrator</Label>
      </Logos>
      <NextRow>
        <Image src={"../logos/dreamweaver.png"} /> <Label>Dreamweaver</Label>
        <Image src={"../logos/figma.png"} /> <Label>Figma</Label>
      </NextRow>
     
      <SmallScreenLogos>
        <Image src={"../logos/html.png"} /> <Label>HTML 5</Label>
        <Image src={"../logos/css-3.png"} /> <Label>CSS 3</Label>
        
      </SmallScreenLogos>
      <SmallNextRow>
        <Image src={"../logos/bootstrap.png"} /> <Label>Bootstrap</Label>
        <Image src={"../logos/java-script.png"} /> <Label>JavaScript</Label>
        
      </SmallNextRow>
      <SmallRowThree>
        <Image src={"../logos/atom-symbol.png"} /> <Label>React</Label>
      <Image src={"../logos/figma.png"} /> <Label>Figma</Label>
      </SmallRowThree>
 <hr />
      <SmallScreenLogos>
      <Image src={"../logos/adobe-photoshop.png"} /> <Label>Photoshop</Label>
        <Image src={"../logos/adobe-indesign.png"} /> <Label>Indesign</Label>
      </SmallScreenLogos>
      <SmallNextRow>
      <Image src={"../logos/adobe-illustrator.png"} /><Label>Illustrator</Label>
      <Image src={"../logos/dreamweaver.png"} /> <Label>Dreamweaver</Label>
      </SmallNextRow>
      <SmallRowThree>
      <Image src={"../logos/figma.png"} /> <Label>Figma</Label>
      </SmallRowThree>
    </div>
  </Container>
);

export default Skills;
