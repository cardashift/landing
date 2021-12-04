import React from 'react'
import classnames from 'classnames'
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
    { name: 'Wiki', selected: false },
  ]

  return (
    <div className="block md:hidden">
      <img
        src="/images/mobile-bubble.png"
        className="mx-auto absolute top-0 left-0 right-0 -z-1 block sm:hidden"
      />
      <div className="flex items-start mt-8">
        <img
          src="/images/logo.svg"
          className="mx-auto"
          width="170px"
          height="29px"
        />
        <div onClick={() => setOverlayOpened(true)}>
          <img src="/images/hamburger-icon.svg" width="66px" height="66px" />
        </div>
      </div>
      <div
        className={`${
          overlayOpened ? 'block' : 'hidden'
        } fixed bg-grayLight top-0 left-0 w-full h-full overflow-x-hidden`}
      >
        <div className="flex md:hidden items-center mb-12 mt-8">
          <img
            src="/images/logo.svg"
            className="mx-auto"
            width="170px"
            height="29px"
          />
          <div onClick={() => setOverlayOpened(false)}>
            <img src="/images/close-icon.svg" width="66px" height="66px" />
          </div>
        </div>
        <div>
          <ul className="flex items-center flex-col self-ends">
            {navigationItems.map((item, index) => (
              <li
                className={classnames(
                  item.name == selected
                    ? 'bg-gray-900 text-black bg-blend-soft-light shadow-sm rounded-20'
                    : 'text-gray hover:bg-gray-700',
                  'bg-purple-light w-22 cursor-pointer font-Inter font-medium text-sm flex items-start justify-center mb-8 mr-5 py-3 px-5'
                )}
                key={index}
                onClick={() => setSelected(item.name)}
              >
                {item.name}
              </li>
            ))}
          </ul>
          <Button className="bg-blue text-white font-Inter font-medium text-xs mx-auto mt-16 mb-8">
            Pre-register to the ico
            <ArrowIcon className="ml-2" color="blue" />
          </Button>
          <span className="flex justify-center text-gray-600 text-xs font-Inter font-bold text-gray mb-5">
            POWERED BY <img className="ml-2" src="/images/powered-by.svg" />
          </span>
        </div>
      </div>
    </div>
  )
}

export default MobileHeader