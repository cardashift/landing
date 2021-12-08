import React from 'react'
import CompanyCard from '../components/CompanyCard'
import LogoCircle from '../components/LogoCircle'
import TitleContainer from '../components/TitleContainer'
import { useWindowSize } from '../hooks/useWindowSize'
function EcoSysteme() {
  const windowSize = useWindowSize()
  return (
    <div
      className="flex  sm:static flex-wrap sm:flex-nowrap items-center md:w-5/12"
      style={{ paddingBottom: windowSize < 768 ? '50rem' : null }}
    >
      <div className="flex items-center  relative">
        <div className="md:my-72 ">
          <TitleContainer
            topTitle="Ecosystem"
            title="Cardashift Core Companies"
            classnametitle="font-black text-2xl md:text-5xl my-4 pr-2"
          />
          <CompanyCard
            title="Matters"
            description="Product and start-up helping new businesses to succeed and scale their idea from inception all the way through to finished product/service. With over 14 years of experience, Matters has assisted over 150 startups with a success rate upwards of 90% and with a cumulative value of +1bn$."
          />
          <CompanyCard
            title="Smart-Chain"
            description="Firm focused on Blockchain research and innovation with a specialization in PoS protocols. Passionate about Cardano and his scientific approach, Smartchain has an expertise in scalability of PoS protocols, Payments, ZK-proof, MPC, Cert&Traceability use cases, and governance and incentive systems."
          />
          <CompanyCard
            title="Stim"
            description="A spin-off from Mines Paristech, a top-level European engineering university, Stim specialises in radical innovation exploration and acceleration for environmental shift. For the past 7 years Stim has been developing disruptive innovation strategies and products for industry leaders in energy, food, and mobility."
          />
        </div>
      </div>
      <LogoCircle />
    </div>
  )
}

export default EcoSysteme
