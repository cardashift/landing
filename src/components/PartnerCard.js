import React from 'react'

function PartnerCard({ logo, partnerType }) {
  return (
    <div className="h-full pl-7 pr-5 py-6 border-2 rounded-lg border-white shadow-sm bg-button-orange-gradien bg-grayLight blend border-opacity-40">
      <img src={logo} className="mb-4" />
      <p className="font-Inter font-medium text-base text-paraColor opacity-60">
        {partnerType}
      </p>
    </div>
  )
}

export default PartnerCard
