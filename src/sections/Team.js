import React from 'react'
import Profile from '../components/Profile'
import {
  foundersTeam,
  devTeam,
  pmTeam,
  marketingTeam,
  impactAssTeam,
  ProductManagement,
} from '../data/profilesData'

function Team() {
  return (
    <div className="hidden md:block">
      {' '}
      <div className="mt-8">
        <h3 className="font-Nizzoli text-base font-black">
          Founders & executive
        </h3>
        <div className=" flex gap-6 flex-wrap">
          {foundersTeam.map((profile, index) => (
            <Profile
              urlPicture={profile.urlPicture}
              fullName={profile.fullName}
              fonction={profile.fonction}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="my-10">
        <h3 className="font-Nizzoli font-black text-2xl text-black mb-6">
          Developement{' '}
        </h3>
        <div className="flex flex-row gap-10 flex-wrap">
          {devTeam.map((profile, index) => (
            <Profile
              urlPicture={profile.urlPicture}
              fullName={profile.fullName}
              fonction={profile.fonction}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="my-10">
        <h3 className="font-Nizzoli font-black text-2xl text-black mb-6">
          Product Management
        </h3>
        <div className="flex flex-row gap-10 flex-wrap">
          {ProductManagement.map((profile, index) => (
            <Profile
              urlPicture={profile.urlPicture}
              fullName={profile.fullName}
              fonction={profile.fonction}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="my-10">
        <h3 className="font-Nizzoli font-black text-2xl text-black mb-6">
          Impact assessment
        </h3>
        <div className=" flex flex-row gap-10 flex-wrap">
          {pmTeam.map((profile, index) => (
            <Profile
              urlPicture={profile.urlPicture}
              fullName={profile.fullName}
              fonction={profile.fonction}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="my-10">
        <h3 className="font-Nizzoli font-black text-2xl text-black mb-6">
          Marketing & communication
        </h3>
        <div className=" flex flex-row gap-10 flex-wrap">
          {impactAssTeam.map((profile, index) => (
            <Profile
              urlPicture={profile.urlPicture}
              fullName={profile.fullName}
              fonction={profile.fonction}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="my-10">
        <h3 className="font-Nizzoli font-black text-2xl text-black mb-6">
          Marketing Management
        </h3>
        <div className=" flex flex-row gap-10 flex-wrap">
          {marketingTeam.map((profile, index) => (
            <Profile
              urlPicture={profile.urlPicture}
              fullName={profile.fullName}
              fonction={profile.fonction}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Team
