import React, { Component } from 'react';

import Header from './Header/Header';
import Layout from './Layout/Layout';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop';

class App extends Component {
    state = {
        drawerOpen: false
    };

    drawerToggleClickHandler = () => {
        this.setState(prevState => {
            return {
                drawerOpen: !prevState.drawerOpen
            };
        });
    };

    backdropClickHandler = () => {
        this.setState({ drawerOpen: false });
    };

    render() {
        let backDrop;

        if (this.state.drawerOpen) {
            backDrop = <Backdrop close={this.backdropClickHandler} />;
        }

        return (
            <>
                <Header toggle={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.drawerOpen} />
                {backDrop}
                <Layout />
            </>
        );
    }
}

export default App;
