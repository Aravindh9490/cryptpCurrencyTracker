import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {currencyList: [], isLoading: true}

  componentDidMount() {
    this.fetchingData()
  }

  fetchingData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const updatedeData = data.map(eachCoin => ({
      currencyName: eachCoin.currency_name,
      usdValue: eachCoin.usd_value,
      euroValue: eachCoin.euro_value,
      id: eachCoin.id,
      currencyLogo: eachCoin.currency_logo,
    }))
    this.setState({currencyList: updatedeData, isLoading: false})
  }

  render() {
    const {currencyList, isLoading} = this.state

    return (
      <div>
        <h1 className="col">Cryptocurrency Tracker</h1>
        <img
          alt="cryptocurrency"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        />
        <div className="coinsBox">
          <u1>
            <li className="title">
              <h1>Coin Type</h1>
              <div className="title">
                <h1 className="m">USD</h1>
                <h1>EURO</h1>
              </div>
            </li>
            {isLoading ? (
              <div data-testid="loader">
                <Loader type="Rings" color="#ffffff" height={80} width={80} />
              </div>
            ) : (
              currencyList.map(eachCoin => (
                <CryptocurrencyItem key={eachCoin.id} List={eachCoin} />
              ))
            )}
          </u1>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
