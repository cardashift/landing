import React from 'react'
import Profile from '../components/Profile'
import TitleContainer from '../components/TitleContainer'
import { Element } from 'react-scroll'
import {
  foundersTeam,
  devTeam,
  impactTeam,
  marketingTeam,
  productTeam,
} from '../data/profilesData'

function Team() {
  const gap =
    window.innerWidth > 400 && window.innerWidth < 700 ? 'gap-1' : 'gap-3'
  return (
    <Element name={'Team'}>
      <div className="md:block md:my-32 ">
        <TitleContainer
          classnameContainer="md:mb-24"
          topTitle="Team"
          title="+35 Humans <br /> Joining the Cardano Community"
          classnametitle="text-2xl md:text-5xl font-black mt-3"
        />
        <div className="mt-8">
          <h3 className="font-Nizzoli font-black md:text-2xl text-lg text-black mb-6">
            Founders & executive
          </h3>
          <div
            className={`flex justify-start ${gap} md:gap-6 md:justify-start flex-wrap`}
          >
            {foundersTeam.map((profile, index) => (
              <Profile
                urlPicture={profile.urlPicture}
                fullName={profile.fullName}
                role={profile.role}
                key={index}
                social={profile.social}
              />
            ))}
          </div>
        </div>
        <div className="my-10">
          <h3 className="font-Nizzoli font-black md:text-2xl text-lg text-black mb-6">
            Blockchain
          </h3>
          <div
            className={`flex flex-row ${gap} md:gap-6 justify-start flex-wrap`}
          >
            {devTeam.map((profile, index) => (
              <Profile
                urlPicture={profile.urlPicture}
                fullName={profile.fullName}
                role={profile.role}
                key={index}
                social={profile.social}
              />
            ))}
          </div>
        </div>
        <div className="my-10">
          <h3 className="font-Nizzoli font-black md:text-2xl text-lg text-black mb-6">
            Product
          </h3>
          <div
            className={` flex flex-row ${gap} md:gap-6 justify-start flex-wrap`}
          >
            {productTeam.map((profile, index) => (
              <Profile
                urlPicture={profile.urlPicture}
                fullName={profile.fullName}
                role={profile.role}
                key={index}
                social={profile.social}
              />
            ))}
          </div>
        </div>
        <div className="my-10">
          <h3 className="font-Nizzoli font-black md:text-2xl text-lg text-black mb-6">
            Impact assessment
          </h3>
          <div
            className={` flex flex-row ${gap} md:gap-6 justify-start flex-wrap`}
          >
            {impactTeam.map((profile, index) => (
              <Profile
                urlPicture={profile.urlPicture}
                fullName={profile.fullName}
                role={profile.role}
                key={index}
                social={profile.social}
              />
            ))}
          </div>
        </div>
        <div className="my-10">
          <h3 className="font-Nizzoli font-black md:text-2xl text-lg text-black mb-6">
            Growth, Marketing and Communication
          </h3>
          <div
            className={` flex flex-row ${gap} md:gap-6 justify-start flex-wrap`}
          >
            {marketingTeam.map((profile, index) => (
              <Profile
                urlPicture={profile.urlPicture}
                fullName={profile.fullName}
                role={profile.role}
                key={index}
                social={profile.social}
              />
            ))}
          </div>
        </div>
        {/* <div className="my-10">
          <h3 className="font-Nizzoli font-black md:text-2xl text-lg text-black mb-6">
            Advisors
          </h3>
          <div
            className={` flex flex-row ${gap} md:gap-6 justify-start flex-wrap`}
          >
            {advisorTeam.map((profile, index) => (
              <Profile
                urlPicture={profile.urlPicture}
                fullName={profile.fullName}
                role={profile.role}
                key={index}
                social={profile.social}
              />
            ))}
          </div>
        </div> */}
      </div>
    </Element>
  )
}

export default Team
