import styled from "styled-components";




const Container = styled.div`
  background-color: #4442ad;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding-top: 3em;
`;

const Logo = styled.p`
  font-size: 50px;
`;

const FormContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Image =styled.img`
  border-radius: 50%;
  height: 15em;
  width: 15em;
`

const Title = styled.p`
  font-size: 40px;
  background-color: white;
  width: 15em;
  height: 2em;
  color: #4442ad;
  line-height: 2em;
`;
const Subtitle = styled.p`
`;



const Link = styled.a`
  text-decoration: none;
  color: white;
  font-size: 40px;
`
const Footer = styled.div`
  background-color: #4442ad;
  height: 15vh;
  width: 100%;
  border: 2px solid #31d8ef;
  color: white;
  text-align: left;
  padding-left: 5em;
`

const Contact = ({ innerRef }) => (
  <Container ref={innerRef}>
    
    
    <FormContainer>
    <Image src="../imgs/ME.jpg" />
      <Title>CONTACT ME</Title>
      <Subtitle>email</Subtitle>
      <Link href="mailto:emmavanvorst@gmail.com">emmavanvorst@gmail.com</Link>
      <Link href = "https://www.linkedin.com/in/emmavv" ><Subtitle>LinkedIn</Subtitle></Link>
    </FormContainer>
    <Footer>
      <Logo>EVV</Logo>
      </Footer>
  </Container>
);

export default Contact;
