import React from 'react'

function TokenCard() {
  return (
    <div className="md:w-96 rounded-lg bg-button-orange-gradien mt-8 bg-grayLight blend border-white border-opacity-40 border p-6 shadow ">
      <div className="flex justify-between">
        <span className="font-Inter font-normal  text-sm text-primaire opacity-70 leading-4">
          Ticker
        </span>
        <h3 className="font-bold font-Inter  text-sm text-primaire leading-4">
          CLAP
        </h3>
      </div>
      <hr className="line" />
      <div className="flex justify-between">
        <span className="font-Inter font-normal  text-sm text-primaire opacity-70 leading-4">
          Token Standard
        </span>
        <h3 className="font-bold font-Inter  text-sm text-primaire leading-4">
          Cardano Native Asset
        </h3>
      </div>
      <hr className="line" />
      <div className="flex justify-between">
        <span className="font-Inter font-normal  text-sm text-primaire opacity-70 leading-4">
          Total token supply
        </span>
        <h3 className="font-bold font-Inter  text-sm text-primaire leading-4">
          1,000,000,000
        </h3>
      </div>
      <hr className="line" />
      <div className="flex justify-between">
        <span className="font-Inter font-normal  text-sm text-primaire opacity-70 leading-4">
          Initial Circulating Supply
        </span>
        <h3 className="font-bold font-Inter  text-sm text-primaire leading-4">
          TBA
        </h3>
      </div>
      <hr className="line" />
      <div className="flex justify-between">
        <span className="font-Inter font-normal  text-sm text-primaire opacity-70 leading-4">
          Initial Market Cap
        </span>
        <h3 className="font-bold font-Inter  text-sm text-primaire leading-4">
          TBA
        </h3>
      </div>
      <hr className="line" />
      <div className="flex justify-between">
        <span className="font-Inter font-normal  text-sm text-primaire opacity-70 leading-4">
          Fully Diluted Market Cap
        </span>
        <h3 className="font-bold font-Inter  text-sm text-primaire leading-4">
          TBA
        </h3>
      </div>
    </div>
  )
}

export default TokenCard
