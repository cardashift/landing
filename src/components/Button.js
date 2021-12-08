import React from 'react'
import classnames from 'classnames'

function Button({ children, className }) {
  return (
    <button
      className={classnames(
        `${className} flex items-center relative justify-between cursor-pointer rounded-full py-3 px-5 border-2 border-opacity-40  border-white font-Inter`
      )}
    >
      <div className="absolute w-full h-full left-0 border-2 hover:border-opacity-40 border-opacity-0 border-white  rounded-full -z-1"></div>
      {children}
    </button>
  )
}
export default Button