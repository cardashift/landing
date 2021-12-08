import React from 'react'

function CompanyCard({ title, description }) {
  return (
    <div className="rounded-lg bg-button-orange-gradien bg-grayLight blend border-white  border-opacity-40 border  p-6 shadow my-8">
      <div className="flex justify-between md:justify-start mb-4">
        <h1 className="font-Inter text-xl tracking-wide text-paraColor font-bold">
          {title}
        </h1>
        <img
          className="-my-6 w-20"
          src="/images/arrow-right-violet.svg"
          alt="arrow-right"
        />
      </div>

      <div className="my-2 flex flex-row items-start justify-between">
        <h3 className="font-Inter text-base tracking-wide leading-6 text-paraColor opacity-70">
          {description}
        </h3>
      </div>
    </div>
  )
}

export default CompanyCard
