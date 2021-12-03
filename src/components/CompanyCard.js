import React from 'react'

function CompanyCard({ title, description }) {
  return (
    <div className="rounded-lg bg-button-orange-gradien border-white  w-5/12  border-opacity-40 border bg-blend-normal p-6 shadow my-8">
      <h1 className="font-Inter text-xl tracking-wide text-paraColor font-bold">
        {title}
      </h1>
      <div className="my-2 flex flex-row items-start justify-between">
        <h3 className="font-Inter text-base tracking-wide leading-6 text-paraColor opacity-70">
          {description}
        </h3>
        <img
          className="-my-6"
          src="/images/arrow-right-violet.svg"
          alt="arrow-right"
        />
      </div>
    </div>
  )
}

export default CompanyCard
