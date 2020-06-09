import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './Burgeringrients/BurgerIngredient';

const burger = () => {
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='breadTop' />
      <BurgerIngredient type='cheese' />
      <BurgerIngredient type='meat' />
      <BurgerIngredient type='breadBottom' />
    </div>
  );
};

export default burger;
