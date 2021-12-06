import React from 'react'
import Button from '../components/Button'
import GlassCard from '../components/GlassCard'

function CardsAbout() {
  return (
    <>
      <div className="flex flex-col gap-20 py-52 items-start justify-evenly">
        <img src="../images/left-cloud.svg" className="absolute left-0 -z-1" />
        <div className="flex items-center">
          <div className="relative">
            <GlassCard
              img="images/leftRectangle.svg"
              className="md:w-50 px-6 py-8 md:p-16 mt-0  "
              topTitle="Impact or profit?"
              title="Reaching sustainability while being profitable is a big hurdle for change makers"
              description="Environmental and social transition stakes are increasingly prevalent. Change makers are working hard but they still lack the funding and the appropriate support to increase their success rate. Technologies - tools - relationships are needed to tokenize and accelerate these impact ventures to make them financially viable investments."
            />
            <img
              src="/images/big-bubble.png"
              className="absolute right-48 bottom-16 -z-1"
            />
            <img
              src="/images/big-bubble.png"
              className="absolute w-12 h-12 right-36 bottom-12 -z-1"
            />
          </div>
          <img
            src="/images/Big Bubble 2.png"
            className="absolute right-2 w-28 h-28"
          />
          <img
            src="/images/Bigest bubble 1.png"
            className="w-28 h-28"
            style={{ transform: 'translate(-20px, 300px)' }}
          />
        </div>

        <br />
        <GlassCard
          img="images/rightRectangle.svg"
          className="md:w-50 px-6 py-8 md:p-16 self-end"
          topTitle="About Cardashift"
          title="Empowering the visionary ventures that will create 
        a sustainable future"
          description="Cardashift funds and works intensively with impact startups that are solving social and environmental issues. Our goal is to build an ecosystem of change makers that will debug the world by harnessing blockchain technology and the decentralised power of many.
        Everyone is a stakeholder in Cardashift with participation rights and decision making privileges."
          button={
            <Button className="bg-blue hover:bg-colorBlueHover text-white mt-5 font-Inter font-medium text-sm h-12">
              Discover the products
            </Button>
          }
        />
      </div>
    </>
  )
}

export default CardsAbout
