import React from 'react'
import ArrowIcon from '../components/ArrowIcon'
import Button from '../components/Button'
import FundingBlock from '../components/FundingBlock'
import FundingCap from '../components/FundingCap'

function FundingStages() {
  return (
    <div className="hidden md:flex flex-col">
      <div className="flex justify-between items-center">
        <p className="font-Nizzoli font-black text-3xl text-black">
          Funding Stages
        </p>
        <div className="flex justify-between" style={{ width: 411 }}>
          <FundingCap topTitle={'SOFT CAP'} pricing={'$4 100 000'} />
          <FundingCap topTitle={'HARD CAP'} pricing={'$9 100 000'} />
        </div>
      </div>
      <div className="flex flex-row my-12 gap-6">
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
      <Button className="shadow bg-gradient-to-br self-center mt-8 bg-blue text-white font-medium text-base h-14 tracking-wide">
        Pre-register to the ico
        <ArrowIcon className="ml-2" color="blue" />
      </Button>
    </div>
  )
}

export default FundingStages
