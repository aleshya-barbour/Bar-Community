import React from 'react'
import WalletCard from '../Metamask/WalletCard'
import WalletCardEthers from '../Metamask/WalletCardEthers'


const Wallet = () => {
  return (
    <div className='components'>
  
    <WalletCard/>
    <WalletCardEthers/>
    </div>
  )
}

export default Wallet
