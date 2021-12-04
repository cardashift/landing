import React from 'react'
function GlassCard({ className, topTitle, title, description, button }) {
  return (
    <div className={`${className} h-auto flex flex-col rounded-3xl`}>
      <span className="text-blue uppercase font-Inter font-black text-xs tracking-wider">
        {topTitle}
      </span>
      <h3 className="font-Nizzoli text-2xl md:text-5xl my-4 font-black leading-8 md:leading-62">
        {title}
      </h3>
      <p className="text-gray font-Inter mb-0 text-base">{description}</p>
      {button && <div className="w-18 pt-4">{button}</div>}
    </div>
  )
}
export default GlassCard
