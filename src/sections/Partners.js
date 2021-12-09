import React from 'react'
import TitleContainer from '../components/TitleContainer'
import PartnerCard from '../components/PartnerCard'

function Partners() {
  const partnersList = [
    {
      logo: '/images/partners/logo-blockchain-for-good-1.svg',
      partnerType: 'Impact Project Sourcing Partner',
      link: 'https://blockchainforgood.fr/',
    },
    {
      logo: '/images/partners/pb.svg',
      partnerType: 'Impact Project Sourcing Partner',
      link: 'https://positiveblockchain.io/',
    },
    {
      logo: '/images/partners/io.svg',
      partnerType: 'Technical Partner ',
      link: 'https://iohk.io/',
    },
    {
      logo: '/images/partners/poa.svg',
      partnerType: 'Cardano Stake Pool Operator',
      link: 'https://poapool.com/',
    },
    {
      logo: '/images/partners/exaion.svg',
      partnerType: 'Technical Infrastructure Partner',
      link: 'https://exaion.edf.fr/',
    },
    {
      logo: '/images/partners/eic-1.svg',
      partnerType: 'Technical Infrastructure Partner',
      link: 'https://www.eic-corporation.org/',
    },
    {
      logo: '/images/partners/bc-1.svg',
      partnerType: 'Impact Project Sourcing Partner',
      link: 'https://m.facebook.com/people/Bc-Cameroonians/100001280215627',
    },
    {
      logo: '/images/partners/smart-chain.svg',
      partnerType: 'Strategic Partner of IOHK',
      link: 'https://smart-chain.fr',
    },
  ]
  return (
    <div className="">
      <TitleContainer
        title="Cardashift Partners"
        classnametitle="text-26 md:text-5xl font-black mt-3"
      />
      <div className="flex flex-row flex-wrap my-8 justify-between md:-mr-14 md:-ml-14">
        {partnersList.map((item, index) => (
          <div className="w-full md:w-1/4 px-0 pb-3 md:p-3 ">
            <a href={item.link} target="_blank">
              <PartnerCard
                key={index}
                logo={item.logo}
                partnerType={item.partnerType}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Partners
