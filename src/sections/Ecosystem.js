import React from 'react'
import LogoCircle from '../components/LogoCircle'
import TitleContainer from '../components/TitleContainer'

function Ecosystem() {
  return (
    <div className="flex justify-between items-start my-44">
      <TitleContainer
        classname="mt-9 w-50 pr-48 text-lg"
        classnametitle="w-50 text-5xl my-3 font-black py-2"
        topTitle="$CLAP token"
        title="Giving the Cardashift
ecosystem the fuel to thrive "
        paragraphe="$CLAP token is at the core of the Cardashift product ecosystem. Its utilities are designed to evolve as the ecosystem does, making it progressively useful and ultimately valuable."
      />
      <LogoCircle />
    </div>
  )
}
export default Ecosystem