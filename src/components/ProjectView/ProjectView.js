import React, {Component}  from 'react';
import {Card, Icon } from 'semantic-ui-react';

class ProjectView extends Component {
    render() {
        return(
            <Card color={this.props.projectColor}> 
                <Card.Content>
                    <Card.Header>{this.props.projectName}</Card.Header>
                </Card.Content>
                <Card.Content extra>
                    <Icon name={this.props.projectType} />
                </Card.Content>
            </Card>
        );
    }
}

export default ProjectView;