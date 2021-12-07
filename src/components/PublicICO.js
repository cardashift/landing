import React from 'react'
import Countdown from 'react-countdown'
function PublicICO() {
  const renderer = ({ completed, formatted }) => {
    const { days, hours, minutes, seconds } = formatted
    if (completed) {
      return <span>You are good to go!</span>
    } else {
      return (
        <div className="bg-gray-100  backdrop-blur-md h-36 rounded-3xl font-NizzoliAlt font-bold flex flex-col justify-center text-grayPublicICO">
          <p className="text-center mb-2">Public ICO coming soon</p>
          <div className="flex justify-center gap-2">
            <span className="flex flex-col items-center w-12 justify-center font-Inter font-normal text-5xl ">
              {days}
              <span className="text-xs font-Inter font-bold">days</span>
            </span>
            <span className="font-Inter font-normal text-5xl mx-2">:</span>
            <span className="flex flex-col items-center w-12 justify-center font-Inter font-normal text-5xl">
              {hours}
              <span className="text-xs font-Inter font-bold">hours</span>
            </span>
            <span className="font-Inter font-normal text-5xl mx-2">:</span>
            <span className="flex flex-col items-center w-12 justify-center font-Inter font-normal text-5xl">
              {minutes}
              <span className="text-xs font-Inter font-bold">minutes</span>
            </span>
            <span className="font-Inter font-normal text-5xl mx-2">:</span>
            <span className="flex flex-col items-center w-12 justify-center font-Inter font-normal text-5xl">
              {seconds}
              <span className="text-xs font-Inter font-bold">seconds</span>
            </span>
          </div>
        </div>
      )
    }
  }
  return (
    <div className="my-10 rounded-3xl p-2px bg-glass-border">
      <Countdown date={new Date(2021, 11, 10)} renderer={renderer}></Countdown>
    </div>
  )
}

export default PublicICO
