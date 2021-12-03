import React from 'react'

function FundingCap({ topTitle, pricing }) {
  return (
    <div className="w-48 flex flex-col border-2 rounded-lg border-white shadow-sm bg-button-orange-gradien py-4 px-6 border-opacity-40 ">
      <span className="text-blue uppercase font-Inter font-bold text-xs tracking-wider mb-1">
        {topTitle}
      </span>
      <span className="font-Inter font-bold text-base text-primaire">
        {pricing}
      </span>
    </div>
  )
}

export default FundingCap
