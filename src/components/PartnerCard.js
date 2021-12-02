import React from 'react'

function PartnerCard({ name, partnerType }) {
  return (
    <div className="partner-card">
      <div>
        <h1 className="font-Nizzoli text-3xl">{name}</h1>
        <span className="font-Gilroy text-base text-partner_text">
          {partnerType}
        </span>
      </div>
    </div>
  )
}

export default PartnerCard
