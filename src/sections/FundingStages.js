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
          <FundingCap topTitle={'SOFT CAP'} pricing={'$4 100 000'} />
          <FundingCap topTitle={'HARD CAP'} pricing={'$9 100 000'} />
        </div>
      </div>
      <div className="flex justify-between flex-wrap  md:flex-nowrap  my-12">
        <FundingBlock
          firstPrice="55,000,000"
          secondPrice="$0.02"
          thirdPrice="$500"
          firstLeftTd="50%"
          firstRightTd="6 months"
          secondLeftTd="50%"
          secondRighttTd="12 months"
        />
        <FundingBlock
          firstPrice="XX,000,000"
          secondPrice="$0.0X"
          thirdPrice="XXX"
          firstLeftTd="100% at TGE"
        />
        <FundingBlock
          firstPrice="XX,000,000"
          secondPrice="$0.0X"
          thirdPrice="XXX"
          firstLeftTd="100% at TGE"
        />
      </div>
      <div className="flex justify-center w-full md:justify-start">
        <Button className="shadow bg-gradient-to-br self-center md:mt-8 bg-blue hover:bg-colorBlueHover text-white font-medium text-base tracking-wide">
          Pre-register to the ico
          <ArrowIcon className="ml-2" color="blue" />
        </Button>
      </div>
    </div>
  )
}

export default FundingStages
