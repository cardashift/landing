import React from 'react'
import { Link } from 'react-scroll'
import ArrowIcon from './ArrowIcon'
import Button from './Button'
import classnames from 'classnames'
function Header() {
  const [selected, setSelected] = React.useState('Home')
  const navigationItems = [
    { name: 'Home', selected: true },
    { name: 'Product', selected: false },
    { name: '$CLAP', selected: false },
    { name: 'Roadmap', selected: false },
    { name: 'Team', selected: false },
    { name: 'Community', selected: false },
  ]
  return (
    <div className="header container fixed top-5 z-3 left-2/4 transform -translate-x-1/2">
      <nav
        className="hidden md:flex h-80 sticky top-5 bg-header-gradient gap-10 justify-between items-center rounded-40  blend shadow-md  px-8 border-2 border-solid border-white border-opacity-40"
        style={{
          zIndex: 10,
          background:
            'linear-gradient(135.37deg, rgba(0, 0, 0, 0.4) 4.29%, rgba(255, 255, 255, 0.4) 95.6%), #EBECF0',
        }}
      >
        <div>
          <img src="/images/logo.svg" width="224px" alt="logo" />
        </div>
        <ul className="flex items-center flex-row gap-0">
          {navigationItems.map((item, index) => (
            <Link to={item.name}>
              <li
                className={classnames(
                  item.name == selected
                    ? 'bg-gray-900 text-black blend shadow-sm rounded-20'
                    : 'text-gray hover:bg-gray-700',
                  'bg-purple-light w-22 cursor-pointer font-Inter font-medium text-sm flex items-start justify-center py-3 px-5'
                )}
                key={index}
                onClick={() => setSelected(item.name)}
              >
                {item.name}
              </li>
            </Link>
          ))}
        </ul>

        <Button className="bg-blue h-10 hover:bg-colorBlueHover  text-white font-Inter font-medium text-xs shadow">
          Pre-register to the ico
          <ArrowIcon className="ml-2" color="blue" />
        </Button>
      </nav>
    </div>
  )
}

export default Header
