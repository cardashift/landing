import React from 'react'
import ArrowIcon from '../components/ArrowIcon'
import Button from '../components/Button'
import PublicICO from '../components/PublicICO'
import TitleContainer from '../components/TitleContainer'
function Hero() {
  return (
    <div style={{ width: 519, marginTop: 91 }}>
      <div>
        <TitleContainer
          title={'Debug the world'}
          paragraphe={
            'Cardashift, the launchpad in service of social and environmental impact'
          }
          classnametitle=" text-8xl font-bold"
          classname="mt-6"
        />
        <PublicICO />
        <div className="flex justify-center">
          <Button className="shadow bg-gradient-to-br from-orangeBlack via-orange to-orange font-medium text-base text-white h-14 tracking-wide">
            Pre-register to the ico
            <ArrowIcon className="ml-2" color="orange" />
          </Button>
          <Button className="shadow font-medium text-base ml-6 h-14 tracking-wide text-gray ">
            Submit your project
            <ArrowIcon color="gray" className="mx-2" />
          </Button>
        </div>
        <span className="flex items-center text-gray-600 text-xs my-24 font-Inter font-bold text-gray ">
          POWERED BY <img className="ml-2" src="../images/powered-by.svg  " />
        </span>
      </div>

      <img
        src="../images/bubble-purple.png"
        className="absolute top-0 right-0 -z-1"
      />
    </div>
  )
}
export default Hero
