import React from 'react'

function FooterCommunication() {
  const socialNetworks = [
    {
      icon: '../images/icon1.svg',
      link: 'https://discord.com/invite/MZTtk9tV',
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
    <div className="md:w-4/12 md:pr-6">
      <img src="../images/footer-cardashift.svg" className="w-56" />
      <p className="my-6 font-Inter font-normal text-white text-base text-opacity-70">
        Empower the visionary ventures that will create a sustainable and
        prosperous future.
      </p>
      <div className="flex flex-row md:gap-2 mb-10">
        {socialNetworks.map(({ icon, link }) => {
          return (
            <span>
              <a href={link} target="_blank">
                <img src={icon} className="mr-10" />
              </a>
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default FooterCommunication
