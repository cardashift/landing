import React from 'react'
import ArrowIcon from './ArrowIcon'
import Button from './Button'

function ProgressCards({ title, paragraphe, srcImg, btnDisplay }) {
  return (
    <div className="flex justify-around items-center mx-24 my-16 border-2 border-black p-6 rounded-md">
      <img src={srcImg} className="mr-6" />
      <div className="flex flex-col justify-center items-start h-52">
        <h3 className=" font-bold font-Inter text-blueRetro text-lg mb-4">
          {title}
        </h3>
        <p className="font-Inter font-normal leading-8 tracking-tight text-paraColor text-base">
          {paragraphe}
        </p>
        {btnDisplay && (
          <Button className="bg-blue text-white font-Inter font-normal text-sm mt-6">
            Submit your project <ArrowIcon color="blue" className="ml-2" />
          </Button>
        )}
      </div>
    </div>
  )
}

export default ProgressCards
