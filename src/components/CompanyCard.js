import React from 'react'

function CompanyCard({ tittle, description }) {
  return (
    <div className="company_card">
      <div>
        <h1 className="font-Gilroy text-2xl tracking-wide text-paraColor font-bold">
          {tittle}
        </h1>
        <div className="my-2 flex flex-row items-start justify-between">
          <h3 className="font-Gilroy text-base tracking-wide leading-6 text-paraColor opacity-70">
            {description}
          </h3>
          <img
            className="-my-6"
            src="/images/arrow-right-violet.svg"
            alt="arrow-right"
          />
        </div>
      </div>
    </div>
  )
}

export default CompanyCard
