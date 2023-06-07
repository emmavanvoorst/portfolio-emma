import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 130vh;
  background-image: url("../imgs/portfoliobkgwhite.png");
  background-position: center;
`;

const Title = styled.p`
  margin-top: 5em;
  font-size: 50px;
  background-color: #4442ad;
  color: white;
  height: 2em;
  width: 20em;
  text-align: center;
  border-radius: 5em;
  line-height: 1.75em;
`

const Image = styled.img`
  margin: 0 0 10em;
  width: 30vw;
  border-radius: 20px;
`;

const Portfolio = ({innerRef}) => (
  <Container ref={innerRef}>

      <Title>FEATURED PROJECTS</Title>

      <Image src="../imgs/Bape Game.png" />
  </Container>
);

export default Portfolio;
