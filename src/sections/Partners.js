import React from 'react'
import TitleContainer from '../components/TitleContainer'
import PartnerCard from '../components/PartnerCard'

function Partners() {
  const partnersList = [
    {
      logo: '/images/les-echos.svg',
      partnerType: 'Project sourcing partner',
    },
    {
      logo: '/images/les-echos.svg',
      partnerType: 'Local communities partner',
    },
    {
      logo: '/images/les-echos.svg',
      partnerType: 'PR & Media partner',
    },
    {
      logo: '/images/les-echos.svg',
      partnerType: 'Project sourcing partner',
    },
  ]
  return (
    <div className="md:block">
      <TitleContainer
        title="Cardashift Partners"
        classnametitle="text-2xl md:text-5xl font-black mt-3"
      />
      <div className="flex flex-col gap-7 md:flex-row my-8 justify-between">
        {partnersList.map((item, index) => (
          <PartnerCard
            key={index}
            logo={item.logo}
            partnerType={item.partnerType}
          />
        ))}
      </div>
    </div>
  )
}

export default Partners
