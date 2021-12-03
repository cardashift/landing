import React from 'react'
import ArrowIcon from '../components/ArrowIcon'
import Button from '../components/Button'
import GlassCard from '../components/GlassCard'

function CardsAbout() {
  return (
    <div className="flex flex-col items-start justify-evenly  ">
      <img src="../images/left-cloud.svg" className="absolute left-0 -z-1" />
      <div className="relative">
        <GlassCard
          className="my-48 bg-impact-gradient  backdrop-filter backdrop-blur-20 border-2 border-solid border-white"
          topTitle="Impact or profit?"
          title="Reaching sustainability while being profitable is a big hurdle for
        change makers"
          description="Environmental and social transition stakes are increasingly prevalent.
        Change makers are working hard but they still lack th             e funding and the
        appropriate support to increase their success rate. Technologies - tools
        - relationships are needed to tokenize and accelerate these impact
        ventures"
        />
        <img
          src="../images/big-bubble.png"
          className="absolute right-10 bottom-1/4 -z-1"
        />
      </div>

      <br />
      <GlassCard
        className="mb-52 self-end bg-impact-gradient backdrop-filter backdrop-blur-20 border-2 border-solid border-white"
        topTitle="About Cardashift?"
        title="Empowering the visionary ventures that will create 
        a sustainable future"
        description="Cardashift funds and works intensively with impact startups that are solving social and environmental issues. Our goal is to build an ecosystem of change makers that will debug the world by harnessing blockchain technology and the decentralised power of many.
        Everyone is a stakeholder in Cardashift with participation rights and decision making privileges."
        button={
          <Button className="bg-blue text-white mt-10 font-Inter font-medium text-xs h-12">
            Discover the products
            <ArrowIcon className="ml-2 rotate-90" color="blue" />
          </Button>
        }
      />
    </div>
  )
}

export default CardsAbout
