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
  font-size: 50px;
  background-color: #4442ad;
  color: white;
  height: 2em;
  width: 20em;
  text-align: center;
  border-radius: 5em;
`

const Image = styled.img`
  width: 30vw;
`;

const Portfolio = () => (
  <Container>

      <Title>FEATURED PROJECTS</Title>

      <Image src="../imgs/placeholder-portrait.png" />
  </Container>
);

export default Portfolio;
