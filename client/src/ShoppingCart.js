import React from 'react';

const ShoppingCart = (props) => {
  console.log(props.itemQty)
    return (
      <>
        <ul id='shopping-dropdown'>
          <li id='totalPrice' className='cartTotal'>Total: {props.total}</li>
          {props.shoppingCart.map((item, i) => (
            <li className='shoppingItem' id={`shoppingItem${i}`}>
              <div className='shoppingItemName'>{item.name}</div>
              <div className='shoppingItemPrice'>${item.price}</div>
              <div className='shoppingItemQty'>x{item.qtyInCart}</div>
              <div className='removeItem' onClick={() => props.handleRemove(i)}><i class="fas fa-minus-circle"></i></div>
            </li>
          ))}
        </ul>
      </>
    )
}

export default ShoppingCart;