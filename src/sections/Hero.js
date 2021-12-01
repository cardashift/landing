import React from 'react'
import ArrowIcon from '../components/ArrowIcon'
import Button from '../components/Button'
import PublicICO from '../components/PublicICO'
import { TitleContainer } from '../components/TitleContainer'
function Hero() {
  return (
    <div style={{ width: 519, marginTop: 91 }}>
      <TitleContainer
        title={'Debug the world'}
        paragraphe={
          'Cardashift, the launchpad in service of social and environmental impact'
        }
      />
      <PublicICO />
      <div className="flex justify-between">
        <Button className="bg-orange font-Inter font-medium text-xs text-white">
          Pre-register to the ico
          <ArrowIcon className="ml-2" color="orange" />
        </Button>
        <Button className="font-Inter font-medium text-xs">
          Submit your project
          <ArrowIcon className="ml-2" color="gray" />
        </Button>
      </div>
      <span className="w-28 flex text-gray-600 text-xs">
        POWERED BY <img className="ml-2" src="../images/powered-by.svg" />
      </span>
    </div>
  )
}
export default Hero
