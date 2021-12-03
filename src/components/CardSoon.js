import React from 'react'

function CardSoon({ cardTitle, subTitle, SoonDisplay }) {
  return (
    <button className="flex justify-between items-center rounded-lg border-2 border-white px-2 w-56 border-opacity-40 bg-impact-gradient">
      <p className="font-Inter font-bold text-sm text-gray mr-2 text-left">
        {cardTitle}
      </p>
      {SoonDisplay && (
        <span className="font-Inter font-bold text-xs text-white bg-blue rounded-md p-1">
          {subTitle}
        </span>
      )}
    </button>
  )
}

export default CardSoon