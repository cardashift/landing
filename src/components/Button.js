import React from 'react'
import classnames from 'classnames'

function Button({ children, className }) {
  return (
    <button
      className={classnames(
        `${className} flex items-center justify-between  cursor-pointer rounded-full py-3 px-5 border-2 hover:border-2 border-opacity-40 border-white font-Inter`
      )}
    >
      {children}
    </button>
  )
}
export default Button