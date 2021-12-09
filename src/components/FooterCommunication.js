import React from 'react'

function FooterCommunication() {
  const socialNetworks = [
    {
      icon: '../images/icon1.svg',
      link: 'https://discord.gg/hTSWWButZR',
    },
    {
      icon: '../images/icon2.svg',
      link: 'https://t.me/+tlucM4-gnpE2Mjhk',
    },
    {
      icon: '../images/icon3.svg',
      link: 'https://cardashift.medium.com/',
    },
    {
      icon: '../images/icon4.svg',
      link: 'https://twitter.com/cardashift',
    },
    {
      icon: '../images/icon5.svg',
      link: 'https://www.linkedin.com/company/cardashift/',
    },
  ]
  
  return (
    <div className="flex flex-col md:flex-row gap-10 md:justify-between md:items-center md:gap-52">
      <img src="../images/footer-cardashift.svg" className="w-56" />
      <p className="font-Inter font-normal text-white text-base text-opacity-70 md:text-center">
        Empower the visionary ventures that will create a sustainable and
        prosperous future.
      </p>
      <div className="flex flex-row">
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
    </div>
  )
}

export default FooterCommunication
