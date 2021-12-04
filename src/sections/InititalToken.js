import React from 'react'
import CircularChart from '../components/CircularChart'
// import TitleContainer from '../components/TitleContainer'
function InitialToken() {
  return (
    <div className="pt-50 hidden md:flex" style={{ height: 700 }}>
      <h3 className="text-4xl text-black font-bold font-Nizzoli">
        Initial Token Distribution
      </h3>
      <div className="flex justify-center" style={{ marginTop: 100 }}>
        {/* <TitleContainer title="Initial Token Distribution" classname="mt-6" /> */}

        <CircularChart
          publicSale={10}
          privateSale={17}
          marketing={22}
          ambassadors={27}
          partnerships={35}
          team={40}
          treasury={100}
        />
      </div>
    </div>
  )
}
export default InitialToken
