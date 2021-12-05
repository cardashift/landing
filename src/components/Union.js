import React from 'react'
import TimeLineCard from './TimeLineCard'

function Union({ color, value, customClass }) {
  const style = {
    border: '4px solid rgba(255, 255, 255, 0.4)',
    boxShadow: 'inset -5px -5px 10px #FAFBFF, inset 5px 5px 10px #A6ABBD',
  }
  return (
    <>
      <div className="flex items-start relative">
        <div className="flex items-center">
          <div className="flex absolute items-center  right-1">
            <label
              className="text-5xl font-semibold font-Poppins "
              style={{ transform: 'rotate(-90deg)' }}
            >
              2022
            </label>
            <TimeLineCard>{value}</TimeLineCard>
            <span className="relative">
              <div
                className="absolute right-1 top-1  w-4 h-4 rounded-full"
                style={{ background: color }}
              ></div>
              <img
                style={{ minHeight: 24, minWidth: 40 }}
                src="/images/union.svg"
              />
            </span>
          </div>
        </div>
        <div className={customClass} style={style}>
          <div
            className={`h-36 w-3  ${customClass}`}
            style={{ background: color }}
          ></div>
        </div>
      </div>
    </>
  )
}

export default Union
