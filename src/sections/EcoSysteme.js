import React from 'react'
import CompanyCard from '../components/CompanyCard'
import LogoCircle from '../components/LogoCircle'
import TitleContainer from '../components/TitleContainer'

function EcoSysteme() {
  return (
    <div
      className="hidden md:flex items-center "
      style={{ width: 'calc(100% - 700px)' }}
    >
      <div className="flex items-center">
        <div className="my-72">
          <TitleContainer
            topTitle="Ecosystem"
            title="Cardashift Core Companies"
            classnametitle="font-black text-5xl my-4"
          />
          <CompanyCard
            title="Matters"
            description="Experts in new digital business, services and products design & development ursus accumsan enim, rutrum aenean eget integer. Blandit aenean"
          />
          <CompanyCard
            title="Smart-Chain"
            description="Blockchain, Technology Specialists ursus accumsan enim, rutrum aenean eget integer. Blandit aenean"
          />
          <CompanyCard
            title="Stim"
            description="Innovation strategy and new product development specialist ursus accumsan enim, rutrum aenean eget integer. Blandit aenean"
          />
        </div>
      </div>
      <LogoCircle />
    </div>
  )
}

export default EcoSysteme
