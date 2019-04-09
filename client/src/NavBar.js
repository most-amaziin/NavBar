import React, { Component } from 'react';
import axios from 'axios';
import styles from './styles.css';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBoxValue: '',
      searchResults: [],
      allowTypeSearch: true,
      finalSearchId: -Infinity,
      searched: false
    };
  }
  
  componentDidMount() {
    window.addEventListener('updateProdId', () => this.setState({searched: true}))
  }

  handleSearchChange(e) {
    e.preventDefault();
    if(this.state.allowTypeSearch) {
      this.setState({searchBoxValue: e.target.value, allowTypeSearch:false}, () => {
        axios.get(`http://127.0.0.1:65535/api/products/names/partial?name=${this.state.searchBoxValue}`)
        .then(response => {
          this.setState({searchResults: response.data, allowTypeSearch: true})
        })
        .catch(err => console.log(err))
        })
    }
  }

  handleSearch(e) {
    e.preventDefault();
    const searchParam = this.state.searchBoxValue;
    axios.get(`http://127.0.0.1:65535/api/products/names?name=${searchParam}`)
    .then(results => {
      this.setState({finalSearchId: results.data.productID}, () => {
        window.dispatchEvent(new CustomEvent('updateProdId', {detail: this.state.finalSearchId}))
      })
    })
    // .then(response => this.setState({searchResults: response.data}, () => {
    //   console.log('we good')
      // window.dispatchEvent(new CustomEvent('updateProdId', {detail: 3}))
    // }))
    .catch(err => console.log('error', err));
  }

  render() {
    return(
      <div className='navBar'>
        <div className='navContent'>
          <h1>Project Name</h1>
          <div className="searchField">
            <input className='search' autoComplete='off' list='search' name='search' type='text' placeholder='Search...' onChange={this.handleSearchChange.bind(this)} default='none'></input>
            <datalist id='search' list='search'>
              {this.state.searchResults.map(item => (
                <option value={item.name}></option>
                ))}
            </datalist>
              <button type='submit'><i className="fas fa-search searchSubmit" onClick={this.handleSearch.bind(this)}></i></button>
          </div>
          <div className='shoppingcart'>Shopping Cart goes here</div>
        </div>
      </div>
    )
  }
}
