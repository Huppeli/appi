import React from 'react';
import styles from "./Home.css";
import bg_image from '../../images/laptop_splash.jpg';
import { Container, Header, Responsive } from 'semantic-ui-react';

const Home = () => (
  <Responsive style={{
    height: "100vh",
    background: `url(${bg_image}) no-repeat center center fixed`,
    backgroundSize: "cover",
    backgroundAttachment: "scroll",
    minHeight: "100vh"
  }}>    
    <Container text style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
      height: "100%",
      position: "relative",
      flexWrap: "wrap"
    }}>
      <Header
        as='h1'
        content='Moi, olen Mika'
        inverted
        style={{
          fontSize: "4em"
        }}
        />
    </Container>    
  </Responsive>
)

export default Home;