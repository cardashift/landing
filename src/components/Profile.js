import React from 'react'

function Profile({ urlPicture, fullName, fonction }) {
  return (
    <div className="rounded-40 border-2 border-white border-opacity-20  bg-button-orange-gradien shadow-sm p-4 profile ">
      <div
        className="flex flex-col justify-end"
        style={{
          backgroundImage: `url(${urlPicture})`,
          height: 238,
          width: 163,
        }}
      >
        <div
          className="profileImg rounded-3xl p-3 flex flex-col justify-end hover:bg-white hover:bg-opacity-40"
          style={{ height: 238, width: 163 }}
        >
          <h3 className="text-white font-Inter font-medium text-xs">
            {fullName}
          </h3>
          <h3 className="text-white font-Inter font-bold text-xs">
            {fonction}
          </h3>
          <div className="flex gap-2 my-1" style={{ width: 72 }}>
            <button className="bg-white w-6 h-6 flex justify-center bg-button-orange-gradien items-center rounded-md	">
              <img src="/images/mail.svg" alt="mail" />
            </button>
            <button className="bg-white w-6 h-6 flex justify-center items-center rounded-md bg-button-orange-gradien">
              <img src="/images/linkedin.svg" alt="linkedin" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
