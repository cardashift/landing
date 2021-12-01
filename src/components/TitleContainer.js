import React from 'react'

export const TitleContainer = ({ title, paragraphe }) => {
  return (
    <div>
      <h2 className="text-8xl text-black font-bold font-Nizzoli">{title}</h2>
      <p className="font-Inter font-normal">{paragraphe}</p>
    </div>
  )
}
