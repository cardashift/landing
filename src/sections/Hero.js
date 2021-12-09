import React from 'react'
import ArrowIcon from '../components/ArrowIcon'
import Button from '../components/Button'
// import PublicICO from '../components/PublicICO'
import TitleContainer from '../components/TitleContainer'
import { Element } from 'react-scroll'

function Hero() {
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
    <Element name={'Home'}>
      <div className="w-full text-center md:w-519 md:text-left mt-250 md:mt-171">
        <div>
          <TitleContainer
            title={'Debug the world'}
            paragraphe={
              'Cardashift, the launchpad in service of social and environmental impact'
            }
            classnametitle="text-5xl md:text-8xl font-black md:font-bold"
            width={850}
            classname="mt-6"
          />
          {/* <PublicICO /> */}
          <div className="flex gap-3 mx-auto items-center md:max-w-none md:flex-row flex-col">
            <a
              href="https://xwexvplj6lo.typeform.com/to/xHPIDHzr"
              target="_blank"
              className="py-6"
            >
              <Button className="md:mb-auto shadow bg-gradient-to-br bg-orange hover:bg-colorBtnHover font-medium text-base text-white tracking-wide whitespace-pre md:whitespace-normal">
                Pre-register to the ICO
                <ArrowIcon className="ml-2" color="orange" />
              </Button>
            </a>
            <div className="px-5 font-Inter font-normal text-base tracking-tight text-paraColor">
              White paper coming soon
            </div>
            {/* <a href="whitepaper.pdf" target="_blank">
              <Button className="shadow font-medium text-base hover:bg-colorGrayHover tracking-wide text-gray ">
                Discover our white paper
                <ArrowIcon color="gray" className="md:mx-2 ml-7" />
              </Button>
            </a> */}
          </div>
          <div className="flex flex-row mt-2">
            {socialNetworks.map(({ icon, link }) => {
              return (
                <span>
                  <a href={link} target="_blank">
                    <img src={icon} className="mr-16 md:mr-8 md:pr-2" />
                  </a>
                </span>
              )
            })}
          </div>
          <span className="flex items-center justify-center md:justify-start mb-17 text-gray-600 text-xs md:my-24 font-Inter font-bold text-gray mt-3">
            POWERED BY <img className="ml-2" src="../images/powered-by.svg  " />
          </span>
        </div>

        <img
          src="../images/bubble-purple.png"
          className="absolute top-2  w-1/2 right-0 -z-1 hidden md:block"
          style={{ height: '67rem' }}
        />
        <div className="flex justify-center w-full absolute left-0">
          <img
            src="../images/Bigest bubble 3.png"
            className="w-44 h-44 hidden sm:block"
          />
        </div>
      </div>
    </Element>
  )
}
export default Hero
