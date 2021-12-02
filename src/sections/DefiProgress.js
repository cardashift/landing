import React from 'react'
import CardSoon from '../components/CardSoon'
import TitleContainer from '../components/TitleContainer'

function DefiProgress() {
  return (
    <div>
      <div className="px-52">
        <TitleContainer
          classnametitle="text-5xl mt-4  leading-tight "
          topTittle="DeFi for universal progress "
          title="Providing technological commons, Built for impact projects & investors"
        />
      </div>
      <div className="flex flex-col rounded-40  my-16 w-full">
        <div className="flex justify-between">
          <CardSoon cardTitle="Launchpad & Acceleration" />
          <CardSoon cardTitle="DeX / AMM" subTitle="Soon" />
          <CardSoon cardTitle="Universal Wallet" subTitle="soon" />
          <CardSoon
            cardTitle="Tokenization & Governance 
Frameworks"
            subTitle="soon"
          />
          <CardSoon cardTitle="Money Management Platform " subTitle="soon" />
        </div>
      </div>
    </div>
  )
}

export default DefiProgress
