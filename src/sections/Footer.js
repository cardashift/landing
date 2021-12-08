import React from 'react'
// import CardsFooter from '../components/CardsFooter'
import FooterCommunication from '../components/FooterCommunication'

function Footer() {
  return (
    <div className="md:flex justify-between bg-blueFooter p-11">
      <FooterCommunication />
      {/* <CardsFooter
        title="Product"
        firstSubTitle="Landing Page"
        secondSubTitle="Features"
        thirdSubTitle="Documentation"
        forthSubTitle="Referral Program"
      />
      <CardsFooter
        title="Services"
        firstSubTitle="Documentation"
        secondSubTitle="Design"
        thirdSubTitle="Themes"
        forthSubTitle="Illustrations"
      />
      <CardsFooter
        title="Company"
        firstSubTitle="About"
        secondSubTitle="Terms"
        thirdSubTitle="Privacy Policy"
        forthSubTitle="Careers"
      />
      <CardsFooter
        title="More"
        firstSubTitle="Documentation"
        secondSubTitle="License"
        thirdSubTitle="Changelog"
      /> */}
    </div>
  )
}

export default Footer
