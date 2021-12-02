import React from 'react'
import classnames from 'classnames'


function TitleContainer({
  title,
  paragraphe,
  classname,
  topTittle,
  classnametitle,
}) {
  return (
    <div>
      <span className="text-blue uppercase font-Inter font-black  text-xs tracking-wider">
        {topTittle}
      </span>
      <h2
        className={classnames(
          `${classnametitle} text-black font-bold font-Nizzoli`
        )}
      >
        {title}
      </h2>
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

export default TitleContainer
