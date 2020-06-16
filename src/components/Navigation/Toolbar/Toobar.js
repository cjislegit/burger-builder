import React from 'react';

import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import Navigation from '../NavigationItems/NavigationItems';

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <div>MENU</div>
      <Logo />
      <Navigation />
    </header>
  );
};

export default toolbar;
