import React from 'react'

function GlassCard({
  className,
  topTitle,
  title,
  description,
  button,
  Background,
  width,
  mt,
  padding,
}) {
  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        width: width,
        marginTop: mt,
        padding: padding,
      }}
      className={
        Background
          ? `${className} bg-auto bg-no-repeat bg-impact-gradient backdrop-filter backdrop-blur-20 
      bg-impact-gradient bg-impact-gradient`
          : `${className}  `
      }
    >
      <div className="md:pt-16 md:pb-24  md:px-10" style={{ maxWidth: 850 }}>
        <span className="text-blue uppercase font-Inter font-black text-xs tracking-wider">
          {topTitle}
        </span>
        <h3 className="font-Nizzoli text-2xl md:text-5xl my-4 font-black pr-10 leading-8 md:leading-62">
          {title}
        </h3>
        <p className="text-gray font-Inter mb-0 text-base">{description}</p>
        {button && <div className="w-18 pt-4">{button}</div>}
      </div>
    </div>
  )
}
export default GlassCard
