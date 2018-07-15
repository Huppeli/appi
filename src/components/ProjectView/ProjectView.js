import React, {Component}  from 'react';
import {Card, Icon } from 'semantic-ui-react';

class ProjectView extends Component {
    render() {
        return(
            <Card fluid color={this.props.projectColor}> 
                <Card.Content>
                    <Card.Header>{this.props.projectName}</Card.Header>
                </Card.Content>
                <Card.Content extra>
                    {this.props.projectType.map((type,index) => 
                        <Icon name={type} key={index} />   
                    )}                    
                </Card.Content>
            </Card>
        );
    }
}

export default ProjectView;