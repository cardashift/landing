import React from 'react'
function GlassCard({ className, topTittle, tittle, description, button }) {
  return (
    <div className={`${className} w-50 h-auto flex flex-col rounded-3xl p-16`}>
      <span className="text-blue uppercase font-Inter font-black text-xs tracking-wider">
        {topTittle}
      </span>
      <h3 className="font-Nizzoli text-5xl my-4 font-black leading-62">
        {tittle}
      </h3>
      <p className="text-gray font-Inter mb-0 text-base">{description}</p>
      {button && <div className="w-18 pt-4">{button}</div>}
    </div>
  )
}
export default GlassCard
