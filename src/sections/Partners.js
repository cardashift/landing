import React from 'react'
import TitleContainer from '../components/TitleContainer'
import PartnerCard from '../components/PartnerCard'

function Partners() {
  const partnersList = [
    {
      logo: '/images/partners/logo-blockchain-for-good-1.svg',
      partnerType: 'Impact Project Sourcing Partner',
    },
    {
      logo: '/images/partners/pb.svg',
      partnerType: 'Impact Project Sourcing Partner',
    },
    {
      logo: '/images/partners/io.svg',
      partnerType: 'Technical Partner ',
    },
    {
      logo: '/images/partners/poa.svg',
      partnerType: 'Cardano Stake Pool Operator',
    },
    {
      logo: '/images/partners/exaion.svg',
      partnerType: 'Technical Infrastructure Partner',
    },
    {
      logo: '/images/partners/eic-1.svg',
      partnerType: 'Technical Infrastructure Partner',
    },
    {
      logo: '/images/partners/bc-1.svg',
      partnerType: 'Impact Project Sourcing Partner',
    },
    {
      logo: '/images/partners/smart-chain.svg',
      partnerType: 'Strategic Partner of IOHK',
    },
  ]
  return (
    <div className="">
      <TitleContainer
        title="Cardashift Partners"
        classnametitle="text-26 md:text-5xl font-black mt-3"
      />
      <div className="flex flex-row flex-wrap my-8 justify-between ">
        {partnersList.map((item, index) => (
          <div className="w-full md:w-1/4 px-0 pb-3 md:p-3">
            <PartnerCard
              key={index}
              logo={item.logo}
              partnerType={item.partnerType}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Partners
