import React from 'react'

function CardsFooter({
  title,
  firstSubTitle,
  secondSubTitle,
  thirdSubTitle,
  forthSubTitle,
}) {
  return (
    <div>
      <h4 className="font-Inter font-bold text-lg text-white mb-2">{title}</h4>
      <p className="font-Inter font-normal text-base text-white text-opacity-70 mt-6">
        {firstSubTitle}
      </p>
      <p className="font-Inter font-normal text-base text-white text-opacity-70 mt-6">
        {secondSubTitle}
      </p>
      <p className="font-Inter font-normal text-base text-white text-opacity-70 mt-6">
        {thirdSubTitle}
      </p>
      <p className="font-Inter font-normal text-base text-white text-opacity-70 mt-6">
        {forthSubTitle}
      </p>
    </div>
  )
}

export default CardsFooter
