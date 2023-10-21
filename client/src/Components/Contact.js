import styled from "styled-components";




const Container = styled.div`
  background-color: #4442ad;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding-top: 3em;
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
  @media screen and (max-width: 500px){
    height: 10em;
  width: auto;
  }
`

const Title = styled.p`
  font-size: 40px;
  background-color: white;
  width: 15em;
  height: 2em;
  color: #4442ad;
  line-height: 2em;
  @media screen and (max-width: 500px){
    font-size: 1.5em;
  }
`;
const Subtitle = styled.p`
`;



const Link = styled.a`
  text-decoration: none;
  color: white;
  font-size: 40px;
  &:hover{
    color: #31d8ef;
  }
  @media screen and (max-width: 500px){
    font-size: 1.5em;
  }
`


const Contact = ({ innerRef }) => (
  <Container ref={innerRef}>
    
    
    <FormContainer>
    <Image src="../imgs/ME.jpg" />
      <Title>CONTACT ME</Title>
      <Subtitle>email</Subtitle>
      <Link href="mailto:emmavanvorst@gmail.com">emmavanvorst@gmail.com</Link>
      <Link href = "https://www.linkedin.com/in/emmavv" ><Subtitle>Connect with me on LinkedIn</Subtitle></Link>
    </FormContainer>
  </Container>
);

export default Contact;
