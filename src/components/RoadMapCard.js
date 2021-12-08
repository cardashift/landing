import React from 'react'
import classnames from 'classnames'
function RoadMapCard({
  classname,
  topTitle,
  title,
  paragraphe,
  classnametoptitle,
  stateList,
}) {
  return (
    <div className="w-full mb-6 sm:mb-0 relative px-6 pb-6 pt-2 sm:w-1/3 rounded-lg border-white border-opacity-40 border-2 shadow-sm md:bg-button-orange-gradien bg-grayLight blend">
      <div
        style={{ width: 'calc(100% - 20px' }}
        className={classnames(
          `${classname} h-1 w-11/12  border-2 absolute left-2 tops-2 rounded-md`
        )}
      />
      <div className="mt-4">
        <span
          className={classnames(
            `${classnametoptitle} uppercase font-Inter font-bold  text-xs tracking-wider`
          )}
        >
          {topTitle}
        </span>
        <h2
          dangerouslySetInnerHTML={{ __html: title }}
          className="font-Inter font-semibold text-lg leading-5"
        />
        <div>
          {stateList && (
            <ul className="font-Inter font-normal text-sm tracking-tight mt-3 text-paraColor">
              The objective of this era is double :
              <ol className="flex  gap-2 my-3">
                1.
                <span>
                  Publish a Launchpad that is accessible to anyone, crypto users
                  and non crypto users (B2C). This will be achieved in two steps
                  : Launchpad v1.0 for crypto enthusiasts, and v2.0 for B2C.
                </span>
              </ol>
              <ol className="flex gap-2 my-3">
                2.
                <span>
                  Release key enablers for our community, projects and
                  Cardashift such as DEX, Staking, Wallet, Farming…
                </span>
              </ol>
            </ul>
          )}
          <p className="font-Inter font-normal text-sm tracking-tight mt-3 text-paraColor">
            {paragraphe}
          </p>
        </div>
      </div>
    </div>
  )
}

export default RoadMapCard
