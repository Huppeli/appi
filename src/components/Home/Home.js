import React from 'react';
import styles from "./Home.css";
import bg_image from '../../images/laptop_splash.jpg';
import bg_image2 from '../../images/sketch.jpg';
import { Container, Header, Responsive } from 'semantic-ui-react';
import ProjectView from '../ProjectView/ProjectView';

const Home = () => (
  <div>
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
          content=""
          inverted
          style={{
            fontSize: "4em"
          }}
          />
        <Header
          as='h2'
          content=""
          inverted
        />
      </Container>    
    </Responsive>
    <Responsive
      style={{
        
        minHeight: '100vh'
      }}
    >
      <ProjectView projectName="Poggers" projectColor="orange" projectType="react" />
    </Responsive>
  </div>
)

export default Home;