import React from 'react'

function Profile({ urlPicture, fullName, fonction }) {
  return (
    <div className="profile">
      <img className="h-56 w-44 rounded-3xl" src={urlPicture} alt="profile" />
      <div className="absolute z-10 -my-24 p-2">
        <h3 className="text-white font-Inter font-medium text-xs">
          {fullName}
        </h3>
        <h3 className="text-white font-Inter font-medium text-xs">
          {fonction}
        </h3>
        <div className="flex justify-between my-1" style={{ width: 72 }}>
          <div className="bg-white w-8 h-8 flex justify-center items-center rounded-md	">
            <img src="/images/twitter.svg" alt="twitter" />
          </div>
          <div className="bg-white w-8 h-8 flex justify-center items-center rounded-md	">
            <img src="/images/linkedin.svg" alt="linkedin" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
