import React from 'react'
import RoadMapCard from '../components/RoadMapCard'
import TitleContainer from '../components/TitleContainer'
import { Element } from 'react-scroll'

function Roadmap() {
  return (
    <Element name={'Roadmap'}>
      <img
        className="absolute right-0"
        src="/images/right-semiCloud.svg"
        style={{ paddingTop: 520 }}
      />
      <div className="hidden md:block h-full">
        <TitleContainer
          topTitle="Milestones"
          title="Cardashift roadmap"
          classnametitle="text-5xl font-black mt-3"
        />
        <div className="flex">
          {/* <RoadMapCard classname="border-blue" />
          <RoadMapCard classname="border-blueLight" /> */}
          <RoadMapCard
            classname="border-blueCiel"
            title="First Era"
            subTitle="Develop tech enablers"
            titleColor="'#0029FF'"
          >
            <p className="font-Inter font-normal text-sm">
              The objective of this era is double :<br />
              <br />
              Publish a Launchpad that is accessible to anyone, crypto users and
              non crypto users (B2C).
              <br />
              <br />
              1.This will be achieved in two steps : Launchpad v1.0 for crypto
              enthusiasts, and v2.0 for B2C.
              <br />
              <br />
              2.Release key enablers for our community, projects and Cardashift
              such as DEX, Staking, Wallet, Farming…
              <br />
              <br />
              By the end of 2022, we will be provided with an ecosystem of
              products and services to enable projects to be funded and generate
              impact at scale. We will also strengthen our assistance to the
              first projects of the Launchpad.
            </p>
          </RoadMapCard>

          <RoadMapCard
            classname="border-orangeLight"
            title="Second ErA"
            subTitle="Go Mainstream and new products & services"
            titleColor="'#FF7A00'"
          >
            <p className="font-Inter font-normal text-sm">
              The second era aims to design and develop new products and
              services for the B2C, while assisting the launchpad projects to
              start and scale.
            </p>
          </RoadMapCard>
          <RoadMapCard
            classname="border-black"
            title="Third Era"
            subTitle="System shifts"
            titleColor="#121E34"
          >
            <p className="font-Inter font-normal text-sm">
              The goal of this era is to tackle systemic blockers to generate
              new ecosystems that are completely different from the current one
              we live in. Strategic insights will be delivered by our teams to
              guide joined efforts.
            </p>
          </RoadMapCard>
          {/* <RoadMapCard classname="border-orangeLight border-opacity-40" /> */}
        </div>
      </div>
    </Element>
  )
}

export default Roadmap
