import React from 'react'
import { Link } from 'react-scroll'
import Button from '../components/Button'
import GlassCard from '../components/GlassCard'

function CardsAbout() {
  return (
    <>
      <div className="md:flex hidden md:flex-col gap-14 justify-evenly">
        <img src="../images/left-cloud.svg" className="absolute left-0 -z-1" />
        <div className="flex">
          <div className="relative">
            <GlassCard
              width={850}
              Background={'images/leftRectangle.svg'}
              topTitle="Impact or profit?"
              title="Reaching sustainability while being profitable is a big hurdle for change makers"
              description="Environmental and social transition stakes are increasingly prevalent. Change makers are working hard but they still lack the funding and the appropriate support to increase their success rate. Technologies - tools - relationships are needed to tokenize and accelerate these impact ventures to make them financially viable investments."
            />
            <img
              src="/images/big-bubble.png"
              className="absolute right-48 bottom-28 -z-1"
            />
            <img
              src="/images/big-bubble.png"
              className="absolute w-12 h-12 right-36 bottom-24 -z-1"
            />
          </div>
          <img
            src="/images/Big Bubble 2.png"
            className="absolute hidden sm:block mt-60 right-2 w-28 h-28"
          />
          <img
            src="/images/Bigest bubble 1.png"
            className="w-28 h-28 hidden sm:block"
            style={{ transform: 'translate(-20px, 500px)' }}
          />
        </div>

        <div className="relative w-full flex justify-end">
          <img
            src="/images/Bigest bubble 3.png"
            className="w-28 h-28 absolute right-0 sm:hidden"
            style={{ top: 50, right: -20, width: 50, height: 50 }}
          />
          <img
            src="/images/Bigest bubble 3.png"
            className="w-28 h-28 absolute right-0 sm:hidden"
            style={{ top: -35, right: 30, width: 110, height: 110 }}
          />

          <br />
          <GlassCard
            width={850}
            className="md:self-end"
            Background={'images/rightRectangle.svg'}
            topTitle="About Cardashift"
            title="Empowering the visionary ventures that will create a sustainable future"
            description="Cardashift funds and works intensively with impact startups that are solving social and environmental issues. Our goal is to build an ecosystem of change makers that will debug the world by harnessing blockchain technology and the decentralised power of many.Everyone is a stakeholder in Cardashift with participation rights and decision making privileges."
            button={
              <Link to="Product">
                <Button className="shadow bg-blue hover:bg-colorBlueHover text-white mt-5 font-Inter font-medium text-sm h-12">
                  Discover the products
                </Button>
              </Link>
            }
          />
        </div>
      </div>
      <div className="md:hidden  flex flex-col md:py-52 justify-evenly">
        <img
          src="../images/left-cloud.svg"
          style={{ marginTop: 480, width: 250 }}
          className="absolute left-0 -z-1"
        />
        <div className="flex" style={{ height: 565 }}>
          <div className="relative">
            <div>
              <img
                src="/images/Bigest bubble 3.png"
                className="w-28 h-28 absolute right-0 sm:hidden"
                style={{
                  top: 0,
                  right: 0,
                  width: 46,
                  height: 46,
                  zIndex: -1,
                }}
              />
              <img
                src="/images/Bigest-bubble3-mobile.png"
                className="w-28 h-28 absolute right-0 sm:hidden"
                style={{
                  top: -150,
                  right: 0,
                  zIndex: -1,
                  width: 50,
                }}
              />
              <img src="images/first-rec-mobile.png" />
              <div style={{ transform: 'translateY(-36rem)' }}>
                <GlassCard
                  className="md:w-5/7 px-6 py-8 md:p-16 mb-52 mt-10 "
                  topTitle="Impact or profit?"
                  title="Reaching sustainability while being profitable is a big hurdle for change makers "
                  description="Environmental and social transition stakes are increasingly prevalent. Change makers are working hard but they still lack the funding and the appropriate support to increase their success rate. Technologies - tools - relationships are needed to tokenize and accelerate these impact ventures to make them financially viable investments."
                />
              </div>
            </div>
            <img
              src="/images/big-bubble.png"
              className="absolute hidden right-48 bottom-16 -z-1  sm:block"
            />
            <img
              src="/images/big-bubble.png"
              className="absolute w-12 h-12 right-36 bottom-12 -z-1 hidden sm:block"
            />
          </div>
          <img
            src="/images/Big Bubble 2.png"
            className="absolute hidden sm:block mt-60 right-2 w-28 h-28"
          />
          <img
            src="/images/Bigest bubble 1.png"
            className="w-28 h-28 hidden sm:block"
            style={{ transform: 'translate(-20px, 500px)' }}
          />
        </div>

        <div className="relative w-full mt-17 md:mt-0">
          <img
            src="/images/Bigest bubble 3.png"
            className="w-28 h-28 absolute right-0 sm:hidden"
            style={{ top: 45, right: -15, width: 50, height: 50, zIndex: -1 }}
          />
          <img
            src="/images/Bigest bubble 3.png"
            className="w-28 h-28 absolute right-0 sm:hidden"
            style={{ top: -40, right: 48, width: 120, height: 120, zIndex: -1 }}
          />
          <br />
          <div>
            <img src="images/rec-mobile-bg.png" />
            <div
              style={{
                transform: 'translateY(-40rem)',
                marginBottom: -550,
              }}
            >
              <GlassCard
                className="md:w-5/7 px-6 py-8 md:p-16 mb-24 md:mb-52 mt-10"
                topTitle="About Cardashift"
                title="Empowering the visionary ventures that will create a sustainable future"
                description="Cardashift funds and works intensively with impact startups that are solving social and environmental issues. Our goal is to build an ecosystem of change makers that will debug the world by harnessing blockchain technology and the decentralised power of many.Everyone is a stakeholder in Cardashift with participation rights and decision making privileges."
                button={
                  <Link to="Product">
                    <Button className="shadow bg-blue hover:bg-colorBlueHover text-white mt-5 font-Inter font-medium text-sm h-12">
                      Discover the products
                    </Button>
                  </Link>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardsAbout
