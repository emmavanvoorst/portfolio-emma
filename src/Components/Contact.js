import styled from "styled-components";


const Container = styled.div`
  background-color: #4442ad;
  height: 50vh;
  color: white;
  text-align:center;
  display: flex;
  justify-content: space-between;
`

const Logo = styled.p`
  font-size: 50px;
`

const Title = styled.p`
  font-size: 50px;
`
const Subtitle =styled.p`

`

const Text = styled.p`
  font-size: 40px;

`

const Contact = () =>(
    <Container>
    <Logo>EVV</Logo>
    <div>
       <Title>CONTACT ME</Title>
       <Subtitle>email</Subtitle>
    <Text>emmavanvoorst@gmail.com</Text>  
    </div>
    </Container>
)

export default Contact;