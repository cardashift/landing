import React from 'react'
import TitleContainer from '../components/TitleContainer'
import PartnerCard from '../components/PartnerCard'

function Partners() {
  const partnersList = [
    {
      name: 'Les Echos',
      partnerType: 'Project sourcing partner',
    },
    {
      name: 'Les Echos',
      partnerType: 'Local communities partner',
    },
    {
      name: 'Les Echos',
      partnerType: 'PR & Media partner',
    },
    {
      name: 'Les Echos',
      partnerType: 'Project sourcing partner',
    },
  ]
  return (
    <div>
      <TitleContainer
        title="Cardashift Partners"
        classnametitle="text-5xl font-black mt-3"
      />
      <div className="flex flex-row my-8 justify-between">
        {partnersList.map((item, index) => (
          <PartnerCard
            key={index}
            name={item.name}
            partnerType={item.partnerType}
          />
        ))}
      </div>
    </div>
  )
}

export default Partners
