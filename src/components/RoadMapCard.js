import React from 'react'
import classnames from 'classnames'
function RoadMapCard({ classname, title, subTitle, children, titleColor }) {
  return (
    <div
      style={{ height: 440 }}
      className="relative p-5 w-1/3 m-6 rounded-lg h-full border-white border-opacity-40 border-2 shadow-sm bg-button-orange-gradien bg-grayLight bg-blend-soft-light"
    >
      <div
        style={{ width: 'calc(100% - 20px' }}
        className={classnames(
          `${classname} h-1  border-2 absolute left-2 top-2 rounded-md`
        )}
      ></div>
      <h4
        style={{ color: titleColor }}
        className="font-Inter font-bold   text-xs"
      >
        {title}
      </h4>
      <h3 className="font-Inter font-bold text-lg ">{subTitle}</h3>
      {children}
    </div>
  )
}

export default RoadMapCard
