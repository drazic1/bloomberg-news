/* global XMLHttpRequest */
import React, { Component } from 'react';

class Quote extends Component {
  constructor(props) {
    super(props);
    this.symbol = 'AAPL';
    this.state = {
      price: 564,
    };
  }

  componentDidMount() {
    this.updatePrice();
    this.timerID = setInterval(() => this.updatePrice(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  //Mocked funciton until avoid CORS
  updatePrice() {
    // const url = 'http://d.yimg.com/autoc.finance.yahoo.com/autoc';
    // const httpRequest = new XMLHttpRequest();
    // httpRequest.onreadystatechange = () => {
    //   if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200) {
    //     this.setState({ price: httpRequest.responseText });
    //   }
    // };
    // httpRequest.open('GET', url);
    // httpRequest.send();
    this.setState({ price: (564 + Math.random()).toFixed(2) });
  }

  render() {
    return (
      <div>{this.state.price}</div>
    );
  }
}
export default Quote;
