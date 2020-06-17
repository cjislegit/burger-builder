import React from 'react';

import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toobar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = (props) => {
  return (
    <React.Fragment>
      <Toolbar />
      <SideDrawer />
      <main className={classes.content}>{props.children}</main>
    </React.Fragment>
  );
};

export default layout;
