import React from 'react'
import CardSoon from '../components/CardSoon'
import ProgressCards from '../components/ProgressCards'
import TitleContainer from '../components/TitleContainer'
import classnames from 'classnames'

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
    <div className="my-16 hidden md:block">
      <div className="px-52">
        <TitleContainer
          classnametitle="text-5xl mt-4 pr-8 leading-tight font-black"
          topTitle="DeFi for universal progress "
          title="Providing technological commons, Built for impact projects & investors"
        />
      </div>
      <div className="flex flex-col rounded-40 border-white border-2  my-16 w-full pt-10 px-10">
        <div className="flex justify-between">
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
            title="Accelerating change by making real world impact a smart investment"
            paragraphe="The world is not a zero-sum game, social/environmental progress and profit can and must coexist. Cardashift creates the technologies, tools and relationships to tokenize impact ventures and make them financially viable investments."
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
  )
}

export default DefiProgress
