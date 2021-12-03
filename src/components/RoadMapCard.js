import React from 'react'
import classnames from 'classnames'
function RoadMapCard({ classname }) {
  return (
    <div className="relative p-5 w-1/6 m-6 rounded-lg h-52 border-white border-opacity-40 border-2 shadow-sm bg-button-orange-gradien bg-blend-normal">
      <h3 className="font-Inter font-bold text-lg ">Q2</h3>
      <ul className="mt-4 px-2">
        <li className="font-Inter text-sm font-normal mb-1">
          &bull; Lorem Ipsum
        </li>
        <li className="font-Inter text-sm font-normal mb-1">
          &bull; Lorem Ipsum
        </li>
        <li className="font-Inter text-sm font-normal mb-1">
          &bull; Lorem Ipsum
        </li>
      </ul>
      <div
        className={classnames(
          `${classname} h-1 w-11/12  border-2 absolute left-2 bottom-2 rounded-md`
        )}
      ></div>
    </div>
  )
}

export default RoadMapCard
