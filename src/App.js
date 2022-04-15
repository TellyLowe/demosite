import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './components/DirectoryComponent';
import { DEMOSITES } from './components/shared/demosites';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            demosites: DEMOSITES
        };
    }
    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Demosite</NavbarBrand>
                </div>
                </Navbar>
                <Directory demosites ={this.state.demosites} />
            </div>
        );
    }
}

export default App;