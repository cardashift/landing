import React from 'react'
import CardSoon from '../components/CardSoon'
import ProgressCards from '../components/ProgressCards'
import TitleContainer from '../components/TitleContainer'
import classnames from 'classnames'
import { Element } from 'react-scroll'

function DefiProgress() {
  const [selected, setSelected] = React.useState('Launchpad & Acceleration')
  const navigationItems = [
    { name: 'Launchpad & Acceleration', selected: true },
    { name: 'DeX / AMM', selected: false },
    { name: 'Universal Wallet', selected: false },
    { name: 'Tokenization & Governance Frameworks', selected: false },
    { name: 'Money Management Platform', selected: false },
  ]
  return (
    <Element name={'Product'}>
      <div className="my-16   sm:block  md:block">
        <div className="md:pr-52">
          <TitleContainer
            classnametitle="text-2xl md:text-5xl mt-4 md:pr-8 leading-tight font-black"
            topTitle="DeFi for universal progress "
            title="Providing technological commons, Built for impact projects & investors"
          />
        </div>
        <div className="rounded-40 my-16 md:p-2px bg-glass-border">
          <div className="flex flex-col rounded-40 bg-gray-100  backdrop-blur-md w-full md:pt-10 md:px-10">
            <div className="flex flex-col md:flex-row justify-between">
              {navigationItems.map((item, index) => (
                <CardSoon
                  cardTitle={item.name}
                  subTitle="Soon"
                  SoonDisplay={
                    item.name === 'Launchpad & Acceleration' ? false : true
                  }
                  classname={classnames(
                    item.name == selected
                      ? 'text-black  shadow-sm  rounded-20'
                      : 'text-gray hover:bg-gray-700'
                  )}
                  key={index}
                  onclick={() => {
                    setSelected(item.name)
                  }}
                />
              ))}
            </div>

            <div className="my-16">
              <ProgressCards
                title="Funding & accelerating the ideas to create a better world for tomorrow"
                paragraphe="Cardashift aims to create the first launchpad for impactful projects on blockchain. We offer you to invest in promising ventures, backed by a best-in-class program to transform them into impactful businesses."
                srcImg="../images/accelerating-change.svg"
                btnDisplay={false}
              />
              <ProgressCards
                title="Bringing rigor to dreams with dedicated scoring and acceleration frameworks"
                paragraphe="Addressing 21st century challenges requires innovative thinking and executable solutions along with immense funding. Cardashift creates the environment to meticulously assess, derisk and track impact ventures."
                srcImg="../images/bringing-rigor.svg"
                btnDisplay={true}
              />
            </div>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default DefiProgress
