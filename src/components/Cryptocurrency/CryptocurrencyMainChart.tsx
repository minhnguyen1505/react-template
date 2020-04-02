import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCoinsMarketsAction } from '../../store/actions/actionCoins';
import {
  formatPrice,
  formatCurrency,
  formatPercent
} from '../../common/helpers';
import './CryptocurrencyMainChart.scss';

import { Button, Select, Icon } from 'antd';
const { Option } = Select;

interface CryptocurrencyMainChartProps {
  getCoinsMarketsAction: Function;
  coinsMarketsStore: any;
}

class CryptocurrencyMainChart extends Component<CryptocurrencyMainChartProps> {
  constructor(props: CryptocurrencyMainChartProps) {
    super(props);
  }
  handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  handleClick = async () => {
    const { getCoinsMarketsAction } = this.props;
    console.log('run???');
    const params = {
      /* eslint-disable @typescript-eslint/camelcase */
      vs_currency: 'usd',
      sparkline: true
    };
    await getCoinsMarketsAction(params);
  };

  componentWillMount() {
    this.handleClick();
  }

  createTbody = () => {
    const { coinsMarketsStore } = this.props;
    const tbody = [];
    if (coinsMarketsStore.hasOwnProperty('success')) {
      const coinsMarketsData = coinsMarketsStore.success.data;
      for (let i = 0; i < Object.keys(coinsMarketsData).length; i++) {
        const data: any = coinsMarketsData[i];
        const children = (
          <tr>
            <td className="sticky sortable center">
              <div>{i + 1}</div>
            </td>
            <td className="sticky sortable left">
              <div className="flex">
                <img
                  src={data.image}
                  alt={data.name}
                  width={16}
                  height={16}
                  className="crypto-icon"
                />
                <a
                  href="/currencies/bitcoin/"
                  title={data.name}
                  className="crypto-link">
                  {data.name}
                </a>
              </div>
            </td>
            <td className="right">
              <div>${formatCurrency.format(data.market_cap)}</div>
            </td>
            <td className="right">
              <a href="/currencies/bitcoin/markets/" className="cmc-link">
                ${formatPrice.format(data.current_price)}
              </a>
            </td>
            <td className="right">
              <a href="/currencies/bitcoin/markets/" className="cmc-link">
                ${formatCurrency.format(data.total_volume)}
              </a>
            </td>
            <td className="right">
              <div>
                {formatCurrency.format(data.circulating_supply)}{' '}
                {data.symbol.toUpperCase()}
              </div>
            </td>
            <td className="right">
              <div
                className={
                  data.price_change_percentage_24h > 0 ? 'positive' : 'negative'
                }>
                {formatPercent.format(data.price_change_percentage_24h)}%
              </div>
            </td>
            <td className="right">
              <div className="cmc-table__column-graph sc-19x49g1-0 fQbfms">
                <a href="/currencies/bitcoin/" className="cmc-link">
                  <img
                    src="https://s2.coinmarketcap.com/generated/sparklines/web/7d/usd/1.png"
                    alt="sparkline"
                    width={164}
                    height={48}
                    className="cmc-price-graph"
                  />
                </a>
              </div>
            </td>
            <td className="right">
              <div className="kdqqbs-0 gJUyCH">
                <div className="cmc-popover sc-12d77vg-0 ERwrC">
                  <div className="cmc-popover__trigger">
                    <span className="cmc-icon__wrap Icon__StyledIcon-sc-1pqyw27-0 nvudS">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="ellipsis-h"
                        className="svg-inline--fa fa-ellipsis-h fa-w-16 cmc-icon"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512">
                        <path
                          fill="currentColor"
                          d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        );
        //Create the parent and add the children
        tbody.push(children);
      }
    }
    return tbody;
  };

  render() {
    return (
      <div>
        <div className="crypto-tabs">
          <div className="crypto-tabs__pagination">
            <Button style={{ marginRight: 5 }}>
              <div className="crypto-tabs__button">
                <Icon type="filter" />
                <span>Filters</span>
              </div>
            </Button>
            <Select
              defaultValue="usd"
              style={{ width: 70, marginRight: 5 }}
              onChange={(value: string) => this.handleChange(value)}>
              <Option value="usd">USD</Option>
              <Option value="btc">BTC</Option>
              <Option value="eth">ETH</Option>
              <Option value="xrp">XRP</Option>
              <Option value="bch">BCH</Option>
              <Option value="ltc">LTC</Option>
            </Select>
            <Button
              type="primary"
              style={{
                backgroundColor: 'white',
                color: '#1890ff',
                marginRight: 5
              }}>
              <div className="crypto-tabs__button">
                <span>Next 100 →</span>
              </div>
            </Button>
            <Button
              type="primary"
              style={{ backgroundColor: 'white', color: '#1890ff' }}
              onClick={() => this.handleClick()}>
              <div className="crypto-tabs__button">
                <span>View All</span>
              </div>
            </Button>
          </div>
          <div className="crypto-tabs__listing-tabs">
            <ul className="tab-header">
              <li className="selected">
                <div className="tab-header__trigger">
                  <span>Cryptocurrencies</span>
                </div>
              </li>
              <li>
                <div className="tab-header__trigger">
                  <span>Exchanges</span>
                </div>
              </li>
              <li>
                <div className="tab-header__trigger">
                  <a href="/watchlist/">Watchlist</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="crypto-table">
          <table style={{ width: '100%' }}>
            <thead>
              <tr>
                <th className="sticky width-40 sortable center">#</th>
                <th className="sticky sortable left">Name</th>
                <th className="sortable right">Market Cap</th>
                <th className="sortable right">Price</th>
                <th className="sortable right">Volume (24h)</th>
                <th className="sortable right">Circulating Supply</th>
                <th className="sortable right">Change (24h)</th>
                <th className="right">Price Graph (7d)</th>
                <th className="right" />
              </tr>
            </thead>
            <tbody>{this.createTbody()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  coinsMarketsStore: state.coinsMarkets
});

export default connect(mapStateToProps, { getCoinsMarketsAction })(
  CryptocurrencyMainChart
);
