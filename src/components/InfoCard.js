import React from 'react'
function InfoCard({ topTittle, tittle, description, button }) {
  return (
    <div className="w-50 h-auto flex flex-col rounded-3xl p-10">
      <span className="text-blueRetro text-base font-Inter font-black">
        {topTittle}
      </span>
      <span className="font-Nizzoli text-5xl my-4 font-black">{tittle}</span>
      <span className="text-text_gray font-Inter">{description}</span>
      {button && <div className="w-18 pt-4">{button}</div>}
    </div>
  )
}
export default InfoCard
