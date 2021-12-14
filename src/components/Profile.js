import React from 'react'

function Profile({ urlPicture, fullName, role, social }) {
  return (
    <div
      style={{ width: 193 }}
      className="rounded-40 border-2 border-white border-opacity-20 md:bg-button-orange-gradien blend bg-grayLight shadow-sm p-4 "
    >
      <div
        className="flex bg-contain bg-no-repeat bg-center flex-col justify-end  profile rounded-3xl"
        style={{
          backgroundImage: `url(${urlPicture})`,
          height: 238,
          width: 163,
          backgroundSize: 'cover'
        }}
      >
        <div
          className="profileImg rounded-3xl p-3 flex flex-col justify-end"
          style={{ height: 268 }}
        >
          <h3 className="text-white font-Inter font-medium text-xs">
            {fullName}
          </h3>
          <h4 className=" text-white font-Inter font-bold text-11 leading-3">
            {role}
          </h4>
          <div className=" flex gap-2 my-1" style={{ width: 72 }}>
            {social &&
              social.map((item) => (
                <>
                  <a
                    href={item.link ? item.link : '#!'}
                    className="w-6 h-6 flex justify-center md:bg-button-orange-gradien blend bg-grayLight items-center rounded-md	"
                    target={item.link ? '_blank' : ''}
                  >
                    <img src={`/images/${item.icon}`} alt={item.name} />
                  </a>
                </>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
