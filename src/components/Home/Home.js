import React, { Component } from 'react';
import styles from "./Home.css";
import bg_image from '../../images/laptop_splash.jpg';
import bg_image2 from '../../images/sketch.jpg';
import { Container, Header, Responsive, Grid, Divider } from 'semantic-ui-react';
import ProjectView from '../ProjectView/ProjectView';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {id: 0, projectName: "Poggers" , projectColor: "orange", projectType: ["react"]},
        {id: 1, projectName: "Nammers" , projectColor: "green", projectType: ["android","database"]},
        {id: 2, projectName: "Anotha one" , projectColor: "blue", projectType: ["gitlab","aws","js"]},
        {id: 3, projectName: "Anotha one" , projectColor: "violet", projectType: ["gitlab","react"]},
      ]
    }
  }
  render() {
    return(
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
          <Header
          as='h2'
          content="Here's some projects I've done"
          />
          <Grid>
            <Grid.Row columns={this.state.projects.length}>
              {this.state.projects.map((project, index) => {
              return (              
                <Grid.Column key={index}>
                  <ProjectView projectName={project.projectName} projectColor={project.projectColor} projectType={project.projectType} /> 
                </Grid.Column>              
                );
              })}
            </Grid.Row>
          </Grid>
        </Responsive>
      </div>
    );
  }
}


export default Home;