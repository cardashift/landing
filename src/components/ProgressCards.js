import React from 'react'

function ProgressCards({ title, paragraphe, srcImg }) {
  return (
    <div className="flex flex-col md:flex-row justify-around md:shadow-none items-center shadow-md md:mx-24 p-6 mb-8 border-2 border-white border-opacity-40 rounded-md  md:bg-button-orange-gradien blend bg-grayLight ">
      <img
        src={srcImg}
        className="w-full md:w-auto max-w-288 md:max-w-none md:mr-8"
      />
      <div className="flex flex-col justify-center items-start md:h-52 px-6 mt-5 md:mt-0">
        <h3 className=" font-bold font-Inter text-blueRetro text-lg mb-4">
          {title}
        </h3>
        <p className="font-Inter font-normal tracking-tight text-blueRetro text-opacity-70 text-base">
          {paragraphe}
        </p>
      </div>
    </div>
  )
}

export default ProgressCards
