import React from 'react'

function CardFeatureMedia({ urlPicture, tittle, description }) {
  return (
    <div
      style={{ height: 463 }}
      className="flex flex-col bg-button-orange-gradien bg-grayLight bg-blend-soft-light rounded-md pb-8 shadow w-72"
    >
      <img
        className="h-52 p-3 rounded-3xl"
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