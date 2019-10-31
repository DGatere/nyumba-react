import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import Backdrop from '../../components/Backdrop/Backdrop';

class Layout extends Component {
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
                <main>{this.props.children}</main>
            </>
        );
    }
}

export default Layout;
