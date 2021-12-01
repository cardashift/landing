import React from 'react'

function Card({ urlPicture, tittle, description }) {
  return (
    <div className="w-72 h-96 flex flex-col	 bg-background-light rounded-md p-3 shadow-lg">
      <img
        className="w-72 h-52 rounded-md"
        src={urlPicture ? urlPicture : '../img/default-img.jpg'}
        alt="img-card"
      />
      <h3 className="text-lg my-3 font-bold text-blueRetro font-Inter">
        {tittle}
      </h3>
      <p className="text-base text-blueRetro font-Inter">{description}</p>
    </div>
  )
}

export default Card
