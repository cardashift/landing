import React from 'react'

function PublicICO() {
  return (
    <div className="my-10 rounded-3xl p-2px bg-glass-border">
      <div className="bg-gray-100 h-36 rounded-3xl font-NizzoliAlt font-bold flex flex-col justify-center text-grayPublicICO backdrop-blur-md">
        <p className="text-center mb-2">Public ICO coming soon</p>
        <div className="flex justify-center ">
          <span className="flex flex-col items-center justify-center font-Inter font-normal ml-2 text-5xl ">
            24<span className="text-xs font-Inter font-bold">days</span>
          </span>
          <span className="flex flex-col items-center justify-center font-Inter font-normal ml-2 text-5xl">
            : 09<span className="text-xs ml-7 font-Inter font-bold">hours</span>
          </span>
          <span className="flex flex-col items-center justify-center font-Inter font-normal ml-2 text-5xl">
            : 57
            <span className="text-xs ml-7 font-Inter font-bold">minutes</span>
          </span>
          <span className="flex flex-col items-center justify-center font-Inter font-normal ml-2 text-5xl">
            : 21
            <span className="text-xs ml-7 font-Inter font-bold">seconds</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default PublicICO
