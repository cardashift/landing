import React from 'react'
import ArrowIcon from './ArrowIcon'
import Button from './Button'
import classnames from 'classnames'
function Header() {
  const [selected, setSelected] = React.useState('Home')
  const navigationItems = [
    { name: 'Home', selected: true },
    { name: '$CLAP', selected: false },
    { name: 'Roadmap', selected: false },
    { name: 'Team', selected: false },
    { name: 'Community', selected: false },
    { name: 'Wiki', selected: false },
  ]
  return (
    <nav className="flex flex-row items-center justify-between rounded-40 mt-5 bg-blend-soft-light shadow-md py-5 px-8 border-2 border-solid border-white border-opacity-40">
      <div>
        <img src="/images/logo.svg" alt="" />
      </div>
      <ul className="flex items-center flex-row self-ends">
        {navigationItems.map((item, index) => (
          <li
            className={classnames(
              item.name == selected
                ? 'bg-gray-900 text-black bg-blend-soft-light shadow-sm rounded-20'
                : 'text-gray hover:bg-gray-700',
              'bg-purple-light w-22 cursor-pointer font-Inter font-medium text-sm flex items-start justify-center mr-5 py-3 px-5'
            )}
            key={index}
            onClick={() => setSelected(item.name)}
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
