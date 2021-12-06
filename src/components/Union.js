import React from 'react'
import TimeLineCard from './TimeLineCard'

function Union({ color, value, customClass, year, isFirstYear }) {
  const style = {
    border: '4px solid rgba(255, 255, 255, 0.4)',
    boxShadow: 'inset -5px -5px 10px #FAFBFF, inset 5px 5px 10px #A6ABBD',
  }
  return (
    <>
      <div className="flex items-start relative">
        <div className="flex items-center">
          <div
            className={`flex absolute items-center  right-1 ${
              isFirstYear ? 'top-24' : null
            }`}
          >
            <label
              className={`text-5xl mt-9 opacity-20 font-semibold font-Poppins ${
                isFirstYear ? '-mt-10' : null
              }`}
              style={{ transform: 'rotate(-90deg)' }}
            >
              {year}
            </label>
            <TimeLineCard>{value}</TimeLineCard>
            <span className="relative">
              <div
                className="absolute right-1 top-1  w-4 h-4 rounded-full"
                style={{
                  background: color,
                  backgroundBlendMode: 'soft-light, normal',
                }}
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
            className={` w-3 ${isFirstYear ? 'h-72' : 'h-28'} ${customClass}`}
            style={{
              background: color,
              backgroundBlendMode: 'soft-light, normal',
            }}
          ></div>
        </div>
      </div>
    </>
  )
}

export default Union
