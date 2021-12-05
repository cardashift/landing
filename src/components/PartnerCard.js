import React from 'react'

function PartnerCard({ logo, partnerType }) {
  return (
    <div className="w-72 h-32	flex flex-col border-2 rounded-lg border-white shadow-sm bg-button-orange-gradien bg-grayLight bg-blend-soft-light py-4 px-6 border-opacity-40  items-center">
      <div className="pt-7">
        <img src={logo} className="mb-4" />
        <p className="font-Gilroy text-base text-paraColor mb-0">
          {partnerType}
        </p>
      </div>
    </div>
  )
}

export default PartnerCard
