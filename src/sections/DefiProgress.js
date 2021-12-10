import React from 'react'
import CardSoon from '../components/CardSoon'
import ProgressCards from '../components/ProgressCards'
import TitleContainer from '../components/TitleContainer'
import classnames from 'classnames'
import { Element } from 'react-scroll'

function DefiProgress() {
  const [isOpen, setIsOpen] = React.useState(false)
  //  const [cardname, setCardname] = React.useState('Launchpad & Acceleration')
  React.useEffect(() => {
    if (window.innerWidth > 500) setIsOpen(true)
  }, [])
  const [selected, setSelected] = React.useState('Launchpad & Acceleration')
  const navigationItems = [
    { name: 'Launchpad & Acceleration', selected: true },
    { name: 'DeX / AMM', selected: false },
    { name: 'Universal Wallet', selected: false },
    { name: 'STO Platform', selected: false },
    { name: 'DAO Launcher', selected: false },
  ]
  return (
    <Element name={'Product'}>
      <div className="md:my-16">
        <div className="md:pr-52">
          <TitleContainer
            classnametitle="text-2xl md:text-5xl mt-4 md:pr-8 leading-tight font-black"
            topTitle="DeFi for Universal Progress "
            title="Providing Technological Commons, Built for Impact Projects & Investors"
          />
        </div>
        <div className="rounded-40 my-16 md:p-2px bg-glass-border">
          <div className="flex flex-col items-stretch  rounded-40 bg-gray-100  backdrop-blur-md  md:pt-10 md:px-10">
            {window.innerWidth < 500 && (
              <div className="relative">
                <CardSoon
                  ondoubleclick={() => setIsOpen(!isOpen)}
                  cardTitle={'Launchpad & Acceleration'}
                  subTitle="Soon"
                  // SoonDisplay={
                  //   cardname === 'Launchpad & Acceleration' ? false : true
                  // }
                  classname={classnames('text-gray hover:bg-gray-700 w-full')}
                />
                <img
                  src="images/arrow-down.svg"
                  className="absolute right-2 top-7"
                />
              </div>
            )}

            {isOpen && (
              <div className="flex flex-col items-stretch  md:flex-row md:gap-5 justify-between">
                {navigationItems.map((item, index) => (
                  <CardSoon
                    cardTitle={item.name}
                    subTitle="Soon"
                    SoonDisplay={
                      item.name === 'Launchpad & Acceleration' ? false : true
                    }
                    classname={classnames(
                      item.name == selected
                        ? 'text-black  w-full md:w-56  shadow-sm  rounded-20'
                        : 'text-gray  w-full md:w-56  hover:bg-gray-700'
                    )}
                    key={index}
                    onclick={() => {
                      item.name === 'Launchpad & Acceleration' &&
                        setSelected(item.name)
                      //  setCardname(item.name)
                      {
                        window.innerWidth < 500 && setIsOpen(false)
                      }
                    }}
                  />
                ))}
              </div>
            )}

            <div className="md:my-16">
              <ProgressCards
                title="Funding & accelerating the ideas to create a better world for tomorrow"
                paragraphe="Cardashift aims to create the first launchpad for impactful projects on blockchain. We offer you to invest in promising ventures, backed by a best-in-class program to transform them into impactful businesses."
                srcImg="../images/accelerating-change.svg"
              />
              <ProgressCards
                title="Bringing rigor to dreams with dedicated scoring and acceleration frameworks"
                paragraphe="Addressing 21st century challenges requires innovative thinking and executable solutions along with immense funding. Cardashift creates the environment to meticulously assess, derisk and track impact ventures."
                srcImg="../images/bringing-rigor.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default DefiProgress
