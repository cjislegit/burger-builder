import React from 'react';

import classes from './Layout.module.css';

const layout = (props) => {
  return (
    <React.Fragment>
      <div>Toolbar, SideDrwawer, Dackdrop</div>
      <main className={classes.content}>{props.children}</main>
    </React.Fragment>
  );
};

export default layout;
