import React from 'react'
import classnames from 'classnames'

function Button({ children, className }) {
  return (
    <button
      className={classnames(
        `${className} flex items-center justify-between rounded-full py-3 px-5 h-14 border-solid border-2 border-opacity-40 border-white font-Inter`
      )}
    >
      {children}
    </button>
  )
}

export default Button
