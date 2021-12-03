import React from 'react'
import classnames from 'classnames'

function TitleContainer({
  title,
  paragraphe,
  classname,
  topTitle,
  classnametitle,
  classnameContainer,
}) {
  return (
    <div className={classnameContainer}>
      <span className="text-blue uppercase font-Inter font-black  text-xs tracking-wider">
        {topTitle}
      </span>
      <h2
        dangerouslySetInnerHTML={{ __html: title }}
        className={classnames(`${classnametitle} text-black font-Nizzoli`)}
      ></h2>
      <p
        className={classnames(
          `${classname} font-Inter font-normal text-base tracking-tight text-paraColor`
        )}
      >
        {paragraphe}
      </p>
    </div>
  )
}

export default TitleContainer
