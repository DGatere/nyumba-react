import React, { useState } from 'react';

import Header from '../../components/Header/Header';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import Backdrop from '../../components/Backdrop/Backdrop';

const Layout = props => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const drawerToggleClickHandler = () => {
        setDrawerOpen(!drawerOpen);
    };

    const backdropClickHandler = () => {
        setDrawerOpen(false);
    };

    let backDrop;

    if (drawerOpen) {
        backDrop = <Backdrop close={backdropClickHandler} />;
    }

    return (
        <>
            <Header toggle={drawerToggleClickHandler} />
            <SideDrawer show={drawerOpen} />
            {backDrop}
            <main>{props.children}</main>
        </>
    );
};

export default Layout;
