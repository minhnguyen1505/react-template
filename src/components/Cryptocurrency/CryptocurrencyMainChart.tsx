import React from 'react';
import { connect } from 'react-redux';
import { getCoinsMarketsAction } from '../../store/actions/actionCoins';
import {
  formatPrice,
  formatCurrency,
  formatPercent
} from '../../common/helpers';
import './CryptocurrencyMainChart.scss';

import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Button, Select, Icon } from 'antd';
import Lazyload from 'react-lazyload';
const { Option } = Select;

interface CryptocurrencyMainChartProps {
  getCoinsMarketsAction: Function;
  coinsMarketsStore: any;
  highchartsProps?: HighchartsReact.Props;
}

interface CryptocurrencyMainChartState {
  vsCurrency: string;
}

const TRowPlaceholder = () => {
  return (
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  );
};

const TRow = (props: any) => {
  const data = props.dataTr;
  const vsCurrency = props.vsCurrency;
  const options: Highcharts.Options = {
    chart: {
      width: 164,
      height: 48,
      margin: [0, 0, 0, 0],
      spacing: [0, 0, 0, 0]
    },
    credits: {
      enabled: false
    },
    legend: {
      enabled: false
    },
    title: {
      text: undefined
    },
    tooltip: {
      enabled: false
    },
    xAxis: {
      visible: false
    },
    yAxis: {
      endOnTick: false,
      startOnTick: false,
      visible: false
    },
    series: [
      {
        color: '#edc240',
        type: 'line',
        data: data.sparkline_in_7d.price
      }
    ]
  };
  return (
    <tr>
      <td className="sticky sortable center">
        <div>{props.keyTr}</div>
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
        <div>
          {vsCurrency === 'usd' ? '$' : ''}
          {formatCurrency.format(data.market_cap)}
          {vsCurrency !== 'usd' ? ` ${vsCurrency.toUpperCase()}` : ''}
        </div>
      </td>
      <td className="right">
        <a href="/currencies/bitcoin/markets/" className="cmc-link">
          {vsCurrency === 'usd' ? '$' : ''}
          {formatPrice.format(data.current_price)}
          {vsCurrency !== 'usd' ? ` ${vsCurrency.toUpperCase()}` : ''}
        </a>
      </td>
      <td className="right">
        <a href="/currencies/bitcoin/markets/" className="cmc-link">
          {vsCurrency === 'usd' ? '$' : ''}
          {formatCurrency.format(data.total_volume)}
          {vsCurrency !== 'usd' ? ` ${vsCurrency.toUpperCase()}` : ''}
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
            <HighchartsReact
              highcharts={Highcharts}
              options={options}
              {...props.highchartsProps}
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
};

class CryptocurrencyMainChart extends React.Component<
  CryptocurrencyMainChartProps,
  CryptocurrencyMainChartState
> {
  constructor(props: CryptocurrencyMainChartProps) {
    super(props);
    this.state = {
      vsCurrency: 'usd'
    };
  }

  handleLoadCoinsMarkets = async (value: string) => {
    const { getCoinsMarketsAction } = this.props;
    const params = {
      /* eslint-disable @typescript-eslint/camelcase */
      vs_currency: value,
      sparkline: true
    };
    await getCoinsMarketsAction({
      params: params,
      callback: () => {
        this.setState({ vsCurrency: value });
      }
    });
  };

  componentWillMount() {
    this.handleLoadCoinsMarkets('usd');
  }

  render() {
    const { coinsMarketsStore, highchartsProps } = this.props;
    const { vsCurrency } = this.state;
    let coinsMarketsData = [];
    if (coinsMarketsStore.hasOwnProperty('success')) {
      coinsMarketsData = coinsMarketsStore.success.data;
    }

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
              onChange={(value: string) => this.handleLoadCoinsMarkets(value)}>
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
              onClick={() => this.handleLoadCoinsMarkets('usd')}>
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
            <tbody>
              {coinsMarketsData.map((dataCoin: any, index: number) => {
                const props = {
                  keyTr: index + 1,
                  dataTr: dataCoin,
                  vsCurrency: vsCurrency,
                  highchartsProps: highchartsProps
                };
                return (
                  <Lazyload key={dataCoin.id} placeholder={<TRowPlaceholder />}>
                    <TRow {...props} />
                  </Lazyload>
                );
              })}
            </tbody>
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
