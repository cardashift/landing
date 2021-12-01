import React from 'react'
import classnames from 'classnames'

export const TitleContainer = ({ title, paragraphe, classname }) => {
  return (
    <div>
      <h2 className="text-8xl text-black font-bold font-Nizzoli">{title}</h2>
      <p
        className={classnames(
          `${classname} font-Inter font-normal text-base tracking-tight text-paraColor `
        )}
      >
        {paragraphe}
      </p>
    </div>
  )
}