import React from 'react'

function CardsFooter({
  title,
  firstSubTitle,
  secondSubTitle,
  thirdSubTitle,
  forthSubTitle,
}) {
  return (
    <div className="py-4">
      <h4 className="font-Inter font-bold text-lg text-white mb-2">{title}</h4>
      <div className="flex md:block gap-28">
        <div className="w-28">
          <p className="font-Inter font-normal text-base text-white text-opacity-70 mt-6">
            {firstSubTitle}
          </p>
          <p className="font-Inter font-normal text-base text-white text-opacity-70 mt-6">
            {secondSubTitle}
          </p>
        </div>
        <div>
          <p className="font-Inter font-normal text-base text-white text-opacity-70 mt-6">
            {thirdSubTitle}
          </p>
          <p className="font-Inter font-normal text-base text-white text-opacity-70 mt-6">
            {forthSubTitle}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CardsFooter
