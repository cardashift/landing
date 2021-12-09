import React from 'react'

function FundingBlock({
  title,
  firstPrice,
  secondPrice,
  thirdPrice,
  firstLeftTd,
  firstRightTd,
  secondLeftTd,
  secondRighttTd,
  duration,
}) {
  return (
    <div
      // style={{ width: 411, height: 288 }}
      className="mb-6 sm:mb-0 min-h-72 w-full sm:w-410 p-5 rounded-lg border-white border-opacity-40 border-2 shadow-sm bg-button-orange-gradien bg-grayLight blend"
    >
      <table
        className="table-auto border-separate"
        style={{ borderSpacing: 8, width: "100%" }}
      >
        <tr>
          <th className="text-left font-Inter font-bold text-xl text-primaire">
            {title}
          </th>
        </tr>
        <tr  >
          <td className="font-Inter font-normal text-sm text-primaire leading-4" style={{width: "50%"}}>
            Token supply
          </td>
          <td className="font-Inter font-semibold text-right text-sm text-primaire leading-4" style={{width: "50%"}}>
            {firstPrice}
          </td>
        </tr>
        <tr>
          <td className="font-Inter font-normal text-sm text-primaire leading-4">
            Token price
          </td>
          <td className="font-Inter font-semibold text-right text-sm text-primaire leading-4">
            {secondPrice}
          </td>
        </tr>
        {duration ? (
          <tr>
            <td className="font-Inter font-normal text-sm text-primaire leading-4">
              Duration
            </td>
            <td className="font-Inter font-semibold text-right text-sm text-primaire leading-4">
              {duration}
            </td>
          </tr>
        ) : (
          <tr>
            <td className="font-Inter font-normal text-sm text-primaire leading-4">
              Min. purchase
            </td>
            <td className="font-Inter font-semibold text-right text-sm text-primaire leading-4">
              {thirdPrice}
            </td>
          </tr>
        )}
      </table>
      <table
        className="w-full table-auto border-separate"
        style={{ borderSpacing: 8 }}
      >
        <tr>
          <th className="text-left pr-32 font-Inter font-bold text-base text-primaire">
            Vesting
          </th>
        </tr>
        <tr>
          <td className="font-Inter font-normal text-sm text-primaire leading-4">
            {firstLeftTd}
          </td>
          <td className="font-Inter font-semibold text-right text-sm text-primaire leading-4" style={{width: 210}}>
            {firstRightTd}
          </td>
        </tr>
        <tr>
          <td className="font-Inter font-normal text-sm text-primaire leading-4">
            {secondLeftTd}
          </td>
          <td className="font-Inter font-semibold text-right text-sm text-primaire leading-4" style={{width: 210}}>
            {secondRighttTd}
          </td>
        </tr>
      </table>
    </div>
  )
}

export default FundingBlock
