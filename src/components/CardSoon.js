import React from 'react'

function CardSoon({
  cardTitle,
  subTitle,
  SoonDisplay,
  classname,
  onclick,
  ondoubleclick,
}) {
  return (
    <div
      onMouseDown={ondoubleclick}
      onClick={onclick}
      className={`${classname} flex justify-between items-center rounded-lg border-2 border-white  px-4 py-6 h-16 mb-4 border-opacity-40 md:bg-button-orange-gradien bg-grayLight blend`}
    >
      <div className="font-Inter font-bold text-sm text-gray mr-2 text-left">
        {cardTitle}
      </div>
      {SoonDisplay && (
        <span className="font-Inter font-bold text-xs text-white bg-blue rounded-md p-1 ">
          {subTitle}
        </span>
      )}
    </div>
  )
}

export default CardSoon
