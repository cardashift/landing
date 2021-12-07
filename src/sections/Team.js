import React from 'react'
import Profile from '../components/Profile'
import TitleContainer from '../components/TitleContainer'
import { Element } from 'react-scroll'
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
    <Element name={'Team'}>
      <div className="md:block my-32">
        <TitleContainer
          classnameContainer="md:ml-28 mb-24"
          topTitle="Team"
          title="+XXX competencies <br /> joining the Cardano Community"
          classnametitle="text-5xl font-black mt-3"
        />
        <div className="mt-8">
          <h3 className="font-Nizzoli font-black text-2xl text-black mb-6">
            Founders & executive
          </h3>
          <div className=" flex gap-5 justify-start flex-wrap">
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
            Developement
          </h3>
          <div className="flex flex-row gap-5 justify-start flex-wrap">
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
            Product management
          </h3>
          <div className="flex flex-row gap-5 justify-start flex-wrap">
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
            Project management
          </h3>
          <div className=" flex flex-row gap-5 justify-start flex-wrap">
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
            Impact assessment
          </h3>
          <div className=" flex flex-row gap-5 justify-start flex-wrap">
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
            Marketing & communication
          </h3>
          <div className=" flex flex-row gap-5 justify-start flex-wrap">
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
    </Element>
  )
}

export default Team
