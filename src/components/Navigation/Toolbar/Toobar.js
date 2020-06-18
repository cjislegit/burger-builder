import React from 'react';

import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import Navigation from '../NavigationItems/NavigationItems';
import Menu from '../../UI/Menu/Menu';

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <Menu clicked={props.open} />
      <Logo height='80%' />
      <nav className={classes.DesktopOnly}>
        <Navigation />
      </nav>
    </header>
  );
};

export default toolbar;
