import React from 'react';

const ShoppingCart = (props) => {
  const total = props.shoppingCart.reduce((acc, val) => {
    return acc += val.price;
  }, 0)
  return (
    <>
      <ul id='shopping-dropdown'>
      <li className='cartTotal'>Total: {total}</li>
        {props.shoppingCart.map(item => (
          <li className='shoppingItem'>
            <div className='shoppingItemName'>{item.name}</div>
            <div className='shoppingItemPrice'>${item.price}</div>
            <div className='shoppingItemQty'>x1</div>
          </li>
        ))}
      </ul>
    </>
  )
};

export default ShoppingCart;
