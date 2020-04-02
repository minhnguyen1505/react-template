import React, { Component } from 'react';
import './HomePage.scss';
import CryptocurrencyMainChart from '../../components/Cryptocurrency/CryptocurrencyMainChart';

export default class HomePage extends Component {
  render() {
    return (
      <div className="page-content container-fluid">
        <h5 className="">Top 100 Cryptocurrencies by Market Capitalization</h5>
        <CryptocurrencyMainChart />
      </div>
    );
  }
}
