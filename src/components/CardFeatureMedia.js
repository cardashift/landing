import React from 'react'

function CardFeatureMedia({ urlPicture, tittle, description }) {
  return (
    <div className="w-72 h-96 flex flex-col	 bg-background-light rounded-md pb-8 shadow-lg">
      <img
        className="w-72 h-52 px-3 rounded-md"
        src={urlPicture ? urlPicture : '../img/default-img.jpg'}
        alt="img-card"
      />
      <h3 className="text-lg px-3 my-3 text-blueRetro font-Inter font-bold ">
        {tittle}
      </h3>
      <p className="text-base px-3 text-blueRetro font-Inter font-normal ">
        {description}
      </p>
    </div>
  )
}

export default CardFeatureMedia
