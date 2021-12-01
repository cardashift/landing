import React from 'react'
import ArrowIcon from './ArrowIcon'
import Button from './Button'

function Header() {
  const navigationItems = [
    { name: 'Home', selected: true },
    { name: '$CLAP', selected: true },
    { name: 'Roadmap', selected: true },
    { name: 'Team', selected: true },
    { name: 'Community', selected: true },
    { name: 'Wiki', selected: true },
  ]
  return (
    <nav className="flex flex-row items-center justify-between rounded-40 mt-5 bg-blend-soft-light shadow-md py-5 px-8 border-2 border-solid border-white border-opacity-40">
      <div>
        <img src="/images/logo.svg" alt="" />
      </div>
      <ul className="flex items-center flex-row self-ends">
        {navigationItems.map((item, index) => (
          <li
            className="text-gray bg-purple-light w-22 cursor-pointer font-Inter font-medium text-sm flex items-start justify-center mr-40"
            key={index}
            // onClick={() => setCurrentRoute(item)}
          >
            {item.name}
          </li>
        ))}
      </ul>
      <Button className="bg-blue text-white font-Inter font-medium text-xs">
        Pre-register to the ico
        <ArrowIcon className="ml-2" color="blue" />
      </Button>
    </nav>
  )
}

export default Header
