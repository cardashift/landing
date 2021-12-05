import React from 'react'
import RoadMapCard from '../components/RoadMapCard'
import TitleContainer from '../components/TitleContainer'
import { Element } from 'react-scroll'

function Roadmap() {
  return (
    <Element name={'Roadmap'}>
      <div className="hidden md:block">
        <TitleContainer
          topTitle="Milestones"
          title="Cardashift roadmap"
          classnametitle="text-5xl font-black mt-3"
        />
        <div className="flex">
          <RoadMapCard classname="border-blue" />
          <RoadMapCard classname="border-blueLight" />
          <RoadMapCard classname="border-blueCiel" />
          <RoadMapCard classname="border-orangeLight" />
          <RoadMapCard classname="border-orangeLight border-opacity-60" />
          <RoadMapCard classname="border-orangeLight border-opacity-40" />
        </div>
      </div>
    </Element>
  )
}

export default Roadmap
