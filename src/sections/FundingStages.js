import React from 'react'
import ArrowIcon from '../components/ArrowIcon'
import Button from '../components/Button'
import FundingBlock from '../components/FundingBlock'
import FundingCap from '../components/FundingCap'

function FundingStages() {
  return (
    <div className=" md:flex flex-col ">
      <div className="flex flex-wrap justify-between items-center">
        <p className="font-Nizzoli font-black text-3xl text-black mb-10 sm:mb-0">
          Funding Stages
        </p>
        <div className="w-410  flex justify-between">
          <FundingCap topTitle={'SOFT CAP'} pricing={'$4 500 000'} />
          <FundingCap topTitle={'HARD CAP'} pricing={'$9 500 000'} />
        </div>
      </div>
      <div className="flex justify-between flex-wrap md:flex-nowrap my-12">
        <FundingBlock
          title="Private Sale"
          firstPrice="55,000,000"
          secondPrice="$0.02"
          thirdPrice="$500"
          firstLeftTd="50%"
          firstRightTd="6 months"
          secondLeftTd="50%"
          secondRighttTd="12 months"
          status="closed"
        />
        <FundingBlock
          title="Flash Sale"
          firstPrice="40,000,000"
          secondPrice="1 ADA = 36 CLAP**"
          duration="24 hours"
          firstLeftTd="100% at TGE"
          status="Coming soon"
        />
        <FundingBlock
          title="Public Sale"
          firstPrice="160,000,000"
          secondPrice="1 ADA = 30 CLAP**"
          duration="4 days"
          firstLeftTd="100% at TGE"
          status="Coming soon"
        />
      </div>
      <div className="mb-6 font-Inter font-normal text-base tracking-tight text-paraColor mx-auto">** We reserve the right to modify this rate before the sale in the event that ADA volatility alters our forecasts significantly.</div>
      <div className="flex justify-center w-full">
        <a href="https://xwexvplj6lo.typeform.com/to/xHPIDHzr" target="_blank">
          <Button className="shadow bg-gradient-to-br self-center md:mt-8 bg-blue hover:bg-colorBlueHover text-white font-medium text-base tracking-wide">
            Pre-register to the ICO
            <ArrowIcon className="ml-2" color="blue" />
          </Button>
        </a>
      </div>
    </div>
  )
}

export default FundingStages
