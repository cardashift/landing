import React from 'react'
import ArrowIcon from '../components/ArrowIcon'
import Button from '../components/Button'
import TitleContainer from '../components/TitleContainer'
import { Element } from 'react-scroll'

function CardaShiftCommunity() {
  return (
    <Element name={'Community'}>
      <div className="mt-36 text-center md:flex ">
        <img
          src="../images/left-bubble-cardashift.png"
          className="hidden md:block"
        />
        <div className="py-80 md:text-left">
          <TitleContainer
            classnametitle="font-black text-5xl mb-3"
            title="Eager to join the Cardashift community?"
            paragraphe="Choose your preferred channels to begin your Cardashift journey, learn more about the project, talk to the team and contribute to the ecosystem"
          />
          <div className="flex justify-center flex-col md:flex-row gap-5 items-center mt-10 md:pr-24">
            <Button className="shadow bg-gradient-to-br w-8/12 md:w-full  bg-orangeLight hover:bg-colorBtnHover font-medium text-base text-white h-14 tracking-wide">
              Pre-register to $CLAP ICO
              <ArrowIcon className="ml-2" color="orange" />
            </Button>
            <Button className="shadow font-medium w-8/12 md:w-full text-base md:ml-6 h-14 tracking-wide text-gray hover:bg-colorGrayHover ">
              Submit your project
              <ArrowIcon color="gray" className="mx-2" />
            </Button>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default CardaShiftCommunity
