import './index.css'

const CryptocurrencyItem = props => {
  const {List} = props
  const {currencyLogo, currencyName, usdValue, euroValue} = List

  return (
    <li className="titleItem">
      <div className="row">
        <img className="logo" src={currencyLogo} alt={currencyName} />
        <p>{currencyName}</p>
      </div>
      <div className="row">
        <p className="m">{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
