import React from 'react'
import ArrowIcon from '../components/ArrowIcon'
import Button from '../components/Button'
import TitleContainer from '../components/TitleContainer'
import { Element } from 'react-scroll'

function CardaShiftCommunity() {
  const socialNetworks = [
    {
      icon: '../images/icon1-dark.svg',
      link: 'https://discord.gg/hTSWWButZR',
    },
    {
      icon: '../images/icon2-dark.svg',
      link: 'https://t.me/+tlucM4-gnpE2Mjhk',
    },
    {
      icon: '../images/icon3-dark.svg',
      link: 'https://cardashift.medium.com/',
    },
    {
      icon: '../images/icon4-dark.svg',
      link: 'https://twitter.com/cardashift',
    },
    {
      icon: '../images/icon5-dark.svg',
      link: 'https://www.linkedin.com/company/cardashift/',
    },
  ]

  return (
    <Element name={'Community'}>
      <div className="md:mt-36 text-center md:flex relative">
        <img
          src="images/bubble-footer.svg"
          className="absolute top-20 md:hidden"
        />
        <img
          src="images/bulle-footer-right.svg"
          className="absolute bottom-10 right-0 md:hidden"
        />
        <img
          src="../images/left-bubble-cardashift.png"
          className="hidden md:block"
        />
        <div className="pb-36 pt-80 md:py-80 md:text-left max-w-628 mx-auto">
          <TitleContainer
            classnametitle="font-black text-26 md:text-5xl mb-8 md:mb-3 leading-34 md:leading-62"
            title="Eager to Join the Cardashift Community?"
            paragraphe="Choose your preferred channels to begin your Cardashift journey, learn more about the project, talk to the team and contribute to the ecosystem"
          />
          <div className="flex flex-col md:flex-row gap-5 items-center mt-10">
            {/* <Button className="shadow bg-gradient-to-br bg-orangeLight hover:bg-colorBtnHover font-medium text-base text-white tracking-wide">
              Pre-register to $CLAP ICO
              <ArrowIcon className="ml-2" color="orange" />
            </Button> */}
            <Button className="shadow font-medium text-base tracking-wide text-gray hover:bg-colorGrayHover">
              <a
                href="https://xwexvplj6lo.typeform.com/to/JF4VZZjA"
                target="_blank"
                className="flex justify-between w-full"
              >
                Pre-register to the ICO
                <ArrowIcon color="gray" className="ml-6" />
              </a>
            </Button>
          </div>
          <div className="flex flex-row gap-6 mt-10 mx-10 md:mx-0">
            {socialNetworks.map(({ icon, link }) => {
              return (
                <span className="social-button">
                  <a href={link} target="_blank">
                    <img src={icon} className="m-auto" />
                  </a>
                </span>
              )
            })}
          </div>
        </div>
      </div>
    </Element>
  )
}

export default CardaShiftCommunity
