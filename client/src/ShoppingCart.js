import React, { Component } from 'react';

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <div id='shopping-cart'>
        <div className='shopping-container' onClick={() => console.log('hell')}>
          <div className='fas fa-shopping-cart fa-3x'></div>
        </div>
        {/* <div id='shopping-dropdown'>
          {this.props.shoppingCart.map(item => (
            <div className='shoppingItem'>{item.name}</div>
          ))}
        </div> */}
      </div>
    )
  }
}
