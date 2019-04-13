import React from 'react';

const ShoppingCart = (props) => {
    return (
      <>
        <ul id='shopping-dropdown'>
          <li id='totalPrice' className='cartTotal'>Total: {props.total}</li>
          {props.shoppingCart.map((item, i) => (
            <li className='shoppingItem' id={`shoppingItem${i}`}>
              <div className='shoppingItemName'>{item.name}</div>
              <div className='shoppingItemPrice'>${item.price}</div>
              <div className='shoppingItemQty'>x1</div>
              <div className='removeItem' onClick={() => props.handleRemove(i)}>Remove</div>
            </li>
          ))}
        </ul>
      </>
    )
}

export default ShoppingCart;