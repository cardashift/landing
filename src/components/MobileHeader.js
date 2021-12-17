import classnames from 'classnames'
import React from 'react'
import { Link } from 'react-scroll'

import ArrowIcon from './ArrowIcon'
import Button from './Button'

function MobileHeader() {
  const [selected, setSelected] = React.useState('Home')
  const [overlayOpened, setOverlayOpened] = React.useState(false)

  const navigationItems = [
    { name: 'Home', selected: true },
    { name: 'Product', selected: false },
    { name: '$CLAP', selected: false },

    { name: 'Roadmap', selected: false },
    { name: 'Team', selected: false },
    { name: 'Community', selected: false },
  ]

  return (
    <div className="block md:hidden">
      <img
        src="/images/mobile-bubble.png"
        className="mx-auto w-full absolute top-0 left-0 right-0 -z-1 block md:hidden  "
      />
      <div className="flex items-start mt-8">
        <img className="mx-auto pr-6" style={{ width: 226 }} src="/images/logo-white.png" />
        <div className="mobile-burger" onClick={() => setOverlayOpened(true)}>
          <img src="/images/hamburger-icon.svg" width="100px" height="100px" />
        </div>
      </div>
      <div
        className={`${
          overlayOpened ? 'block' : 'hidden'
        } fixed bg-grayLight top-0 left-0 w-full h-full overflow-x-hidden`}
        style={{ zIndex: 11 }}
      >
        <div
          className="mobile-close ml-auto"
          onClick={() => setOverlayOpened(false)}
        >
          <img src="/images/close-icon.svg" width="100px" height="100px" />
        </div>
        <img
          src="/images/logo.png"
          className="mx-auto mb-14 mt-8 pr-6"
          width="224px"
          height="40px"
        />

        <div>
          <ul className="flex items-center flex-col  mt-12">
            {navigationItems.map((item, index) => (
              <Link to={item.name}>
                <li
                  className={classnames(
                    item.name == selected
                      ? 'bg-gray-900 text-black blend shadow-sm rounded-20'
                      : 'text-gray hover:bg-gray-700',
                    'bg-purple-light w-22 cursor-pointer font-Inter font-medium text-sm flex items-start justify-center mb-8 py-3 px-5'
                  )}
                  key={index}
                  onClick={() => {
                    setSelected(item.name), setOverlayOpened(false)
                  }}
                  to={item.name}
                >
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
          <a
            href="https://cardashift.typeform.com/to/JF4VZZjA "
            target="_blank"
          >
            <Button className="bg-blue hover:bg-colorBlueHover text-white font-Inter font-medium text-xs mx-auto mt-8 mb-8">
              Pre-register to the ICO
              <ArrowIcon className="ml-2" color="blue" />
            </Button>
          </a>
          <span
            className="flex justify-center text-gray-600 text-xs font-Inter font-bold text-gray mb-5"
            style={{ 'line-height': '24px' }}
          >
            POWERED BY <img className="ml-2" src="/images/powered-by.svg" />
          </span>
        </div>
      </div>
    </div>
  )
}

export default MobileHeader
