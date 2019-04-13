import React from 'react';

const ShoppingCart = (props) => {
    const inCart = {};
    return (
      <>
        <ul id='shopping-dropdown'>
          <li id='totalPrice' className='cartTotal'>Total: {props.total}</li>
          {props.shoppingCart.map((item, i) => {
            if(!inCart[item.name]) {
              return (
                <li className='shoppingItem' id={`shoppingItem${i}`}>
                  <div className='shoppingItemName'>{item.name}</div>
                  <div className='shoppingItemPrice'>${item.price}</div>
                  <div className='shoppingItemQty'>x{item.qtyInCart}</div>
                  <div className='removeItem' onClick={() => props.handleRemove(i)}><i class="fas fa-minus-circle"></i></div>
                </li>
              )
            } else {
              inCart[item.name] = true;
            }
          })}
        </ul>
      </>
    )
}

export default ShoppingCart;