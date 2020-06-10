import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './Burgeringrients/BurgerIngredient';

const burger = (props) => {
  // Turns object into array
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    // Flattens the array so I can check if its empty
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please Add Ingredients</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='breadTop' />
      {transformedIngredients}
      <BurgerIngredient type='breadBottom' />
    </div>
  );
};

export default burger;
