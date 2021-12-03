import React from 'react'
import CompanyCard from '../components/CompanyCard'
import TitleContainer from '../components/TitleContainer'

function EcoSysteme() {
  return (
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
        title="Matters"
        description="Experts in new digital business, services and products design & development ursus accumsan enim, rutrum aenean eget integer. Blandit aenean"
      />
      <CompanyCard
        title="Matters"
        description="Experts in new digital business, services and products design & development ursus accumsan enim, rutrum aenean eget integer. Blandit aenean"
      />
    </div>
  )
}

export default EcoSysteme
