import React from 'react'
import ArrowIcon from '../components/ArrowIcon'
import Button from '../components/Button'
import TitleContainer from '../components/TitleContainer'

function CardaShiftCommunity() {
  return (
    <div className="mt-36">
      <img
        src="../images/left-bubble-cardashift.png"
        className="absolute left-0 "
      />
      <div className="py-80 relative" style={{ marginLeft: 732 }}>
        <TitleContainer
          classnametitle="font-black text-5xl mb-3"
          title="Eager to join the Cardashift community?"
          paragraphe="Choose your preferred channels to begin your Cardashift journey, learn more about the project, talk to the team and contribute to the ecosystem"
        />
        <div className="flex justify-center mt-10">
          <Button className="shadow bg-gradient-to-br from-orangeBlack via-orange to-orange font-medium text-base text-white h-14 tracking-wide">
            Pre-register to $CLAP ICO
            <ArrowIcon className="ml-2" color="orange" />
          </Button>
          <Button className="shadow font-medium text-base ml-6 h-14 tracking-wide text-gray ">
            Submit your project
            <ArrowIcon color="gray" className="mx-2" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CardaShiftCommunity