import React from 'react'

function CardFeatureMedia({ urlPicture, tittle, description, link }) {
  return (
    <a href={link} target="_blank">
      <div
        style={{ height: 463 }}
        className="flex flex-col bg-button-orange-gradien bg-grayLight blend rounded-md pb-8 shadow"
      >
        <img
          className="h-52 p-3 rounded-3xl"
          // style={{
          //   height: '13rem',
          //   width: '20rem',
          //   margin: '0 auto',
          // }}
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
    </a>
  )
}
export default CardFeatureMedia
