import React from 'react';

import classes from './Menu.module.css';

const Menu = (props) => {
  return (
    <div onClick={props.clicked}>
      <div className={classes.Menu}></div>
      <div className={classes.Menu}></div>
      <div className={classes.Menu}></div>
    </div>
  );
};

export default Menu;
