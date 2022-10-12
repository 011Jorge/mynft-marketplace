import React from 'react'

import { Select, Options } from './selectStyles'

function SelectCurrency() {
  return (
    <Select>
      <Options>Ethereum</Options>
      <Options>Bitcoin</Options>
      <Options>Solana</Options>
      <Options>Binance coin</Options>
    </Select>
  )
}

export default SelectCurrency
