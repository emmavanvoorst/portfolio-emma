import styled from "styled-components";

const FooterContainer = styled.div`
  background-color: #4442ad;
  height: 15vh;
  width: 100%;
  border-top: 2px solid #31d8ef;
  color: white;
  text-align: left;
  
`

const Logo = styled.p`
  font-size: 50px;
  margin-left: 1em;
`;

const Footer = () => (
<FooterContainer>
      <Logo>EVV</Logo>
      </FooterContainer>
)

export default Footer;