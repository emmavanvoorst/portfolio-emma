import styled from "styled-components";

const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
`
const Image = styled.img`
  max-height: 3em;
  width: 3em;
  margin-right: 1em;
`;
const Label = styled.div`
  margin-right: 4em;
  font-size: 1.5rem;
`;

const CalendArtText = () => {
  return (
  <Container>
    <div>
        <Image src={"../logos/html.png"} /> <Label>HTML 5</Label>
        <Image src={"../logos/css-3.png"} /> <Label>CSS 3</Label>
        <Image src={"../logos/java-script.png"} /> <Label>JavaScript</Label>
        <Image src={"../logos/atom-symbol.png"} /> <Label>React</Label>
        <Image src={"../logos/adobe-illustrator.png"} />
        <Image src={"../logos/figma.png"} /> <Label>Figma</Label>
        </div>
  <div>MADE WITH LOVE</div>
  </Container>
  );
};

export default CalendArtText;
