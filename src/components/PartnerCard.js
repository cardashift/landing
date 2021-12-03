import React from 'react'

function PartnerCard({ logo, partnerType }) {
  return (
    <div className="partner-card">
      <div>
        <img src={logo} className="mb-4" />
        <p className="font-Gilroy text-base text-paraColor mb-0">
          {partnerType}
        </p>
      </div>
    </div>
  )
}

export default PartnerCard
