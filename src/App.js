import React, { useEffect, useState } from 'react'
import CurrencySelector from './components/CurrencySelector'
import DataDisplay from './components/DataDisplay'

function App() {
  const defaultCurrency = "AUD"
  const [currency, setCurrency] = useState(defaultCurrency)
  const [bitcoinData, setBitcoinData] = useState({})
  
  function currencyChangeHandler(newCurrency){
    console.log("new currency: ", newCurrency)
    setCurrency(newCurrency)
  }

  const bitcoinApi = "https://api.coindesk.com/v1/bpi/historical/close.json"
  useEffect (()=>{
    console.log("running useEffect")
    fetch(`${bitcoinApi}?currency=${currency}`)
      .then(response => response.json())
      .then(data => setBitcoinData(data.bpi) )
      .catch(e => e)
    
  }, [currency])

  return (
    <div>
      <h1>Bitcoin index</h1>
      <CurrencySelector currency={currency} handleCurrencyChange={currencyChangeHandler}/>
      <DataDisplay data={bitcoinData}/>
    </div>
  );
}

export default App;