import React from 'react'
import RoadMapCard from '../components/RoadMapCard'
import TitleContainer from '../components/TitleContainer'
import { Element } from 'react-scroll'

function Roadmap() {
  return (
    <Element name={'Roadmap'}>
      <img
        className="hidden absolute -right-44 sm:right-0 -z-1  -translate-y-28 sm:transform-none sm:z-1"
        src="/images/right-semiCloud.svg"
      />
      <div className=" md:block h-full mt-28 sm:mt-0 sm:pt-5xl ">
        <TitleContainer
          topTitle="Milestones"
          title="Cardashift roadmap"
          classnametitle="text-2xl md:text-5xl font-black mt-3"
        />
        <div className="flex justify-between flex-wrap md:flex-nowrap gap-6 mt-8 md:mt-20">
          <RoadMapCard
            stateList={true}
            classnametitle="font-Inter font-normal text-lg"
            classnametoptitle="text-blue"
            topTitle="First Era"
            title="Develop tech enablers"
            paragraphe="By the end of 2022, we will be provided with 
            an ecosystem of products and services to enable projects to be funded and generate impact at scale. 
            We will also strengthen our assistance to the first projects of the Launchpad. "
            classname="border-blue"
          />
          <RoadMapCard
            topTitle="Second ErA"
            title="Go Mainstream and new products & services"
            paragraphe="The second era aims to design and develop new products and services for the B2C, while assisting the launchpad projects to start and scale."
            classnametoptitle="text-orange"
            classname="border-orangeLight"
          />
          <RoadMapCard
            topTitle="Third Era"
            title="System shifts"
            paragraphe="The goal of this era is to tackle systemic blockers to generate new ecosystems that are completely different from the current one we live in. Strategic insights will be delivered by our teams to guide joined efforts."
            classnametoptitle="text-blackLight"
            classname="border-black"
          />
        </div>
      </div>
    </Element>
  )
}

export default Roadmap
