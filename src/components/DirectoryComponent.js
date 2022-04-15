import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDemosite: null
        };
    }

    onDemositeSelect(demosite) {
        this.setState({selectedDemosite: demosite})
    }

    renderSelectedDemosite(demosite) {
        if (demosite) {
            return (
                <Card>
                    <CardImg top src={demosite.image} alt={demosite.name} />
                    <CardBody>
                        <CardTitle>{demosite.name}</CardTitle>
                        <CardText>{demosite.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        return <div />;
    }

    render() {
        const directory = this.props.demosites.map(demosite => {
            return (
                <div key={demosite.id} className='col-md-5 m-1'>
                    <Card onClick={() => this.onDemositeSelect(demosite)}>
                    <CardImg width="100%" src={demosite.image} alt={demosite.name} />
                    <CardImgOverlay>
                    <CardTitle>{demosite.name}</CardTitle>
                    </CardImgOverlay>
                    </Card>
                </div>
            )
        })

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
                <div className="row">
                    <div className="col-md-5 m-1">
                        {this.renderSelectedDemosite(this.state.selectedDemosite)}
                    </div>
                </div>
            </div>
        );
    }
}


export default Directory