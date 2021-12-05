import React from 'react'

function TimeLineCard({
  style,
  isSquare,
  className,
  children,
  border,
  isDefault,
}) {
  return (
    <div
      style={style}
      className={`flex relative border-2 rounded-lg border-white shadow-sm bg-button-orange-gradien
      border-opacity-40  ${className} ${
        isSquare ? 'w-24 h-24 py-5 px-3' : 'w-48 py-4 px-6'
      }`}
    >
      {border && (
        <span
          className={` h-5/6 w-1 absolute  border-2 left-2 top-2 rounded-md  ${
            border === 'borderBlue'
              ? 'border-blueCiel'
              : border === 'borderOrange'
              ? 'border-orangeLight'
              : null
          }`}
        ></span>
      )}
      <span
        className={`font-Inter text-primaire  ${
          isSquare || isDefault ? 'font-medium text-sm' : 'font-bold text-base'
        }`}
      >
        {children}
      </span>
    </div>
  )
}

export default TimeLineCard
