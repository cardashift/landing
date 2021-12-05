import React from 'react'
import ArrowIcon from '../components/ArrowIcon'
import Bubbles from '../components/Bubbles'
import Button from '../components/Button'
import PublicICO from '../components/PublicICO'
import TitleContainer from '../components/TitleContainer'
function Hero() {
  return (
    <div className="w-full text-center md:w-519 md:text-left mt-250 md:mt-91 hero">
      <div>
        <TitleContainer
          title={'Debug the world'}
          paragraphe={
            'Cardashift, the launchpad in service of social and environmental impact'
          }
          classnametitle="text-5xl md:text-8xl font-black md:font-bold"
          classname="mt-6"
        />
        <PublicICO />
        <div className="flex justify-center flex-col mx-auto max-w-252 md:max-w-none md:flex-row">
          <Button className="mb-6 md:mb-auto shadow bg-gradient-to-br from-orangeBlack via-orange to-orange font-medium text-base text-white h-14 tracking-wide whitespace-pre md:whitespace-normal">
            Pre-register to the ico
            <ArrowIcon className="ml-2" color="orange" />
          </Button>
          <Button className="shadow font-medium text-base md:ml-6 h-14 tracking-wide text-gray ">
            Submit your project
            <ArrowIcon color="gray" className="mx-2" />
          </Button>
        </div>
        <span className="flex items-center justify-center md:justify-start mt-9 mb-17 text-gray-600 text-xs md:my-24 font-Inter font-bold text-gray ">
          POWERED BY <img className="ml-2" src="../images/powered-by.svg  " />
        </span>
      </div>

      {/* <img
        src="../images/bubble-purple.png"
        className="absolute top-0 right-0 -z-1 hidden md:block"
      /> */}
      <Bubbles className="absolute w-50 -z-1 top-0 right-0  hidden md:block bubbles" />
    </div>
  )
}
export default Hero
