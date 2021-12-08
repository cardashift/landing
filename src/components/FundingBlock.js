import React from 'react'

function FundingBlock({
  firstPrice,
  secondPrice,
  thirdPrice,
  firstLeftTd,
  firstRightTd,
  secondLeftTd,
  secondRighttTd,
  status,
}) {
  return (
    <div
      // style={{ width: 411, height: 288 }}
      className="mb-6 sm:mb-0 min-h-72 w-full sm:w-410 p-5 rounded-lg border-white border-opacity-40 border-2 shadow-sm md:bg-button-orange-gradien bg-grayLight blend"
    >
      <div className="table-auto border-separate" style={{ borderSpacing: 8 }}>
        <div className="flex justify-between items-center mb-4">
          <div className="text-left pr-32 font-Inter font-bold text-xl text-primaire">
            Private Sale
          </div>
          <div
            className={`text-xs font-Inter leading-15 font-bold p-1 capitalize rounded bg-blend-soft-light text-white ${
              status == 'closed'
                ? 'bg-red-gradient bg-red'
                : 'bg-blue-gradient bg-blue'
            }`}
          >
            {status}
          </div>
        </div>
        <div className="flex justify-between mb-2">
          <div className="font-Inter  font-normal text-sm text-primaire leading-4">
            Token supply
          </div>
          <div className="font-Inter font-semibold text-right text-sm text-primaire leading-4">
            {firstPrice}
          </div>
        </div>
        <div className="flex justify-between mb-2">
          <div className="font-Inter font-normal text-sm text-primaire leading-4">
            Token price
          </div>
          <div className="font-Inter font-semibold text-right text-sm text-primaire leading-4">
            {secondPrice}
          </div>
        </div>
        <div className="flex justify-between mb-5">
          <div className="font-Inter font-normal text-sm text-primaire leading-4">
            Min. purchase
          </div>
          <div className="font-Inter font-semibold text-right text-sm text-primaire leading-4">
            {thirdPrice}
          </div>
        </div>
      </div>
      <div
        className="w-full table-auto border-separate"
        style={{ borderSpacing: 8 }}
      >
        <div className="mb-3 text-left pr-32 font-Inter font-bold text-base text-primaire">
          Vesting
        </div>

        <div className="flex justify-between mb-2">
          <div className="font-Inter font-normal text-sm text-primaire leading-4">
            {firstLeftTd}
          </div>
          <div className="font-Inter font-semibold text-right text-sm text-primaire leading-4">
            {firstRightTd}
          </div>
        </div>
        <div className="flex justify-between mb-2">
          <div className="font-Inter font-normal text-sm text-primaire leading-4">
            {secondLeftTd}
          </div>
          <div className="font-Inter font-semibold text-right text-sm text-primaire leading-4">
            {secondRighttTd}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FundingBlock
