import React from 'react'

function PartnerCard({ name, partnerType }) {
  return (
    <div className="w-72 h-32	flex flex-col border-2 rounded-lg border-white shadow-sm bg-button-orange-gradien py-4 px-6 border-opacity-40 ">
      <div>
        <h1 className="font-Nizzoli text-3xl">{name}</h1>
        <span className="font-Gilroy text-base text-paraColor">
          {partnerType}
        </span>
      </div>
    </div>
  )
}

export default PartnerCard
