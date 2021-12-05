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
      className={`flex relative border-2 rounded-lg border-white shadow-sm  mb-3
      border-opacity-40 bg-blend-soft-light ${className} ${
        isSquare ? 'w-24 h-24 py-5 px-3' : 'w-48 py-4 px-6'
      }`}
    >
      {border && (
        <span
          style={{ height: 'calc(100% - 15px)' }}
          className={`  w-1 absolute  border-2 left-2 top-2 rounded-md  ${
            border === 'borderBlue'
              ? 'border-blueCiel'
              : border === 'borderOrange'
              ? 'border-orangeLight'
              : border === 'borderBlack'
              ? '#121E34'
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
