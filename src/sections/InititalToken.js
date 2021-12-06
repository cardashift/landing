import React from 'react'
import CircularChart from '../components/CircularChart'
function InitialToken() {
  return (
    <div className="pt-50 hidden md:flex flex-col" style={{ height: 700 }}>
      <h3 className="text-3xl text-black font-Nizzoli font-black ">
        Initial Token Distribution
      </h3>
      <div className="mt-24 flex w-full justify-center">
        <CircularChart
          publicSale={20}
          privateSale={5.5}
          marketing={0.1}
          ambassadors={4}
          partnerships={4.5}
          team={15}
          treasury={50.9}
        />
      </div>
    </div>
  )
}
export default InitialToken
