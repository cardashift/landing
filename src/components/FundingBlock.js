import React from 'react'

function FundingBlock({
  firstPrice,
  secondPrice,
  thirdPrice,
  firstLeftTd,
  firstRightTd,
  secondLeftTd,
  secondRighttTd,
}) {
  return (
    <div
      // style={{ width: 411, height: 288 }}
      className="mb-6 sm:mb-0 min-h-72 w-full sm:w-410 p-5 rounded-lg border-white border-opacity-40 border-2 shadow-sm bg-button-orange-gradien bg-grayLight bg-blend-soft-light"
    >
      <table
        className="table-auto border-separate"
        style={{ borderSpacing: 8 }}
      >
        <tr>
          <th className="text-left pr-32 font-Inter font-bold text-xl text-primaire">
            Private Sale
          </th>
        </tr>
        <tr>
          <td className="font-Inter  font-normal text-sm text-primaire leading-4">
            Token supply
          </td>
          <td className="font-Inter font-semibold text-right text-sm text-primaire leading-4">
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
        <tr>
          <td className="font-Inter font-normal text-sm text-primaire leading-4">
            Min. purchase
          </td>
          <td className="font-Inter font-semibold text-right text-sm text-primaire leading-4">
            {thirdPrice}
          </td>
        </tr>
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
          <td className="font-Inter font-semibold text-right text-sm text-primaire leading-4">
            {firstRightTd}
          </td>
        </tr>
        <tr>
          <td className="font-Inter font-normal text-sm text-primaire leading-4">
            {secondLeftTd}
          </td>
          <td className="font-Inter font-semibold text-right text-sm text-primaire leading-4">
            {secondRighttTd}
          </td>
        </tr>
      </table>
    </div>
  )
}

export default FundingBlock
