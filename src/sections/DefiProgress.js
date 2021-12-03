import React from 'react'
import CardSoon from '../components/CardSoon'
import ProgressCards from '../components/ProgressCards'
import TitleContainer from '../components/TitleContainer'

function DefiProgress() {
  return (
    <div className="my-16">
      <div className="px-52">
        <TitleContainer
          classnametitle="text-5xl mt-4  leading-tight font-bold"
          topTitle="DeFi for universal progress "
          title="Providing technological commons, Built for impact projects & investors"
        />
      </div>
      <div className="flex flex-col rounded-40 border-gray-500 border-2  my-16 w-full pt-10 px-10">
        <div className="flex justify-between">
          <CardSoon cardTitle="Launchpad & Acceleration" SoonDisplay={false} />
          <CardSoon SoonDisplay={true} cardTitle="DeX / AMM" subTitle="Soon" />
          <CardSoon
            SoonDisplay={true}
            cardTitle="Universal Wallet"
            subTitle="soon"
          />
          <CardSoon
            SoonDisplay={true}
            cardTitle="Tokenization & Governance Frameworks"
            subTitle="soon"
          />
          <CardSoon
            SoonDisplay={true}
            cardTitle="Money Management Platform "
            subTitle="soon"
          />
        </div>
        <div className="my-16">
          <ProgressCards
            title="Accelerating change by making real world impact a smart investment"
            paragraphe="The world is not a zero-sum game, social/environmental progress and profit can and must coexist. Cardashift creates the technologies, tools and relationships to tokenize impact ventures and make them financially viable investments."
            srcImg="../images/accelerating-change.svg"
            btnDisplay={false}
          />
          <ProgressCards
            title="Bringing rigor to dreams with dedicated scoring and acceleration frameworks"
            paragraphe="Addressing 21st century challenges requires innovative thinking and executable solutions along with immense funding. Cardashift creates the environment to meticulously assess, derisk and track impact ventures."
            srcImg="../images/bringing-rigor.svg"
            btnDisplay={true}
          />
        </div>
      </div>
    </div>
  )
}

export default DefiProgress