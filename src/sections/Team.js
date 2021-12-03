import React from 'react'
import Profile from '../components/Profile'
import {
  foundersTeam,
  devTeam,
  pmTeam,
  marketingTeam,
  projectManagementTeam,
} from '../data/profilesData'

function Team() {
  return (
    <div>
      {' '}
      <div className="mt-8">
        <h3 className="font-Nizzoli text-base font-black">
          Founders & executive
        </h3>
        <div className="pt-5 flex flex-row space-x-4">
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
      <div className="mt-8">
        <h3 className="font-Nizzoli text-base font-black">Developement </h3>
        <div className="pt-5 flex flex-row space-x-4">
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
      <div className="mt-8">
        <h3 className="font-Nizzoli text-base font-black">
          Product Management
        </h3>
        <div className="pt-5 flex flex-row space-x-4">
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
      <div className="mt-8">
        <h3 className="font-Nizzoli text-base font-black">
          Marketing Management
        </h3>
        <div className="pt-5 flex flex-row space-x-4">
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
      <div className="mt-8">
        <h3 className="font-Nizzoli text-base font-black">
          Project Management
        </h3>
        <div className="pt-5 flex flex-row space-x-4">
          {projectManagementTeam.map((profile, index) => (
            <Profile
              urlPicture={profile.urlPicture}
              fullName={profile.fullName}
              fonction={profile.fonction}
              key={index}
            />
          ))}
        </div>
      </div>{' '}
    </div>
  )
}

export default Team
