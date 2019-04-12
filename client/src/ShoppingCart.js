import React from 'react';

const ShoppingCart = (props) => {
  return (
    <>
      <ul id='shopping-dropdown'>
      <li className='cartTotal'>Total: $12.99</li>
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
