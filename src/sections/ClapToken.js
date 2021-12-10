import React from 'react'
import TitleContainer from '../components/TitleContainer'
import TokenCard from '../components/TokenCard'
import { Element } from 'react-scroll'

function ClapToken() {
  return (
    <Element name={'$CLAP'}>
      <div className="md:flex flex-col  items-center md:flex-row justify-between md:items-start mb-16 md:my-44">
        <TitleContainer
          classname="mt-9 md:w-50 md:pr-48 text-lg"
          classnametitle="md:w-50 md:text-5xl text-2xl  my-3 font-black md:py-2"
          topTitle="$CLAP token"
          title="Giving the Cardashift Ecosystem the Fuel to Thrive "
          paragraphe="$CLAP token is at the core of the Cardashift product ecosystem. Its utilities are designed to evolve as the ecosystem does, making it progressively useful and ultimately valuable."
        />
        <TokenCard />
      </div>
    </Element>
  )
}
export default ClapToken
