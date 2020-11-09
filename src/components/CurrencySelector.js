import React from 'react'
import currencies from '../supported-currencies.json'

const CurrencySelector = ({currency, handleCurrencyChange}) =>{
    return (
        <div>
            <span>Select your currency</span>
            <select value={currency} onChange={(event)=> handleCurrencyChange(event.target.value)}>
                {currencies.map((obj,index)=>
                    <option key={`${index}-${obj.country}`} value={obj.currency}>{obj.country}</option>
                )}
            </select>
        </div>
    )
}

export default CurrencySelector