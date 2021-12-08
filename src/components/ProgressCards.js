import React from 'react'
import Button from './Button'

function ProgressCards({ title, paragraphe, srcImg, btnDisplay }) {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center md:mx-24 py-5 mb-8 border-2 border-white border-opacity-40 md:p-6 rounded-md  bg-button-orange-gradien blend bg-grayLight ">
      <img src={srcImg} className="md:mr-8" />
      <div className="flex flex-col justify-center items-start md:h-52 px-6 mt-5">
        <h3 className=" font-bold font-Inter text-blueRetro text-lg mb-4">
          {title}
        </h3>
        <p className="font-Inter font-normal tracking-tight text-blueRetro text-opacity-70 text-base">
          {paragraphe}
        </p>
        {btnDisplay && (
          <Button className="bg-blue hover:bg-colorBlueHover text-white font-Inter font-normal text-sm mt-6 m-auto">
            Submit your project
          </Button>
        )}
      </div>
    </div>
  )
}

export default ProgressCards
