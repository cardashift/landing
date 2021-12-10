import React from 'react'
import TimeLineCard from '../components/TimeLineCard'
import Union from '../components/Union'
import { useWindowSize } from '../hooks/useWindowSize'
function TimeLine() {
  const windowSize = useWindowSize()
  const mobileTextStyle = {
    textOrientation: 'inherit',
    writingMode: 'vertical-lr',
    transform: 'rotate(180deg)',
    textAlign: 'center',
    height: '100%',
    marginLeft: -7,
  }
  const unions = [
    {
      value: '12/2021',
      color:
        'linear-gradient(135.37deg, rgba(0, 0, 0, 0.4) 4.29%, rgba(255, 255, 255, 0.4) 95.6%), #0029FF',
      year: 2021,
    },

    {
      value: 'Q1 2022',
      color:
        'linear-gradient(135.37deg, rgba(0, 0, 0, 0.4) 4.29%, rgba(255, 255, 255, 0.4) 95.6%), #0029FF',
      year: 2022,
    },
    {
      value: 'Q2 2022',
      color:
        'linear-gradient(135.37deg, rgba(0, 0, 0, 0.4) 4.29%, rgba(255, 255, 255, 0.4) 95.6%), #0029FF',
    },
    {
      value: 'Q3 2022',
      color:
        'linear-gradient(135.37deg, rgba(0, 0, 0, 0.4) 4.29%, rgba(255, 255, 255, 0.4) 95.6%), #FF7A00',
    },
    {
      value: 'Q4 2022',
      color:
        'linear-gradient(135.37deg, rgba(0, 0, 0, 0.4) 4.29%, rgba(255, 255, 255, 0.4) 95.6%), #FF7A00',
    },
    {
      value: 'Q1 2023',
      color:
        'linear-gradient(135.37deg, rgba(0, 0, 0, 0.4) 4.29%, rgba(255, 255, 255, 0.4) 95.6%), #FF7A00',
      year: 2023,
    },
    {
      value: 'Q1 2023',
      color: '#121E34',
    },
  ]
  const gridCols = {
    firstCol: [
      {
        content: '1st Call for Projects',
      },
      {
        content: '2nd Call for Projects',
      },
      {
        content: '3rd Call for Projects',
      },
      {
        content: '4th Call for Projects',
      },
      {
        content: '5th Call for Projects',
      },
      {
        content: '6th Call for Projects',
      },
      {
        content: '7th Call for Projects',
      },
      {
        content: '8th Call for Projects',
      },
    ],
    secondCol: [
      {
        content:
          windowSize < 768
            ? 'Launchpad'
            : 'Launchpad Beta for Crypto Enthusiasts',
        border: 'borderBlue',
        style: {
          height: 160,
          marginTop: 20,
        },
      },
      {
        content:
          windowSize < 768
            ? 'Launchpad V2 '
            : 'Launchpad V2 for a Wider Audience',
        border: 'borderBlue',
        style: {
          height: windowSize < 768 ? 340 : 300,
        },
      },
      {
        content: 'Lending',
        border: 'borderOrange',
        style: {
          height: windowSize < 768 ? 318 : 265,
        },
      },
      {
        content:
          windowSize < 768
            ? 'Decentralised Carbon Market'
            : 'Decentralized Blockhain Based Carbon Market',
        border: 'borderBlack',
        style: {
          height: windowSize < 768 ? 252 : 345,
        },
      },
    ],

    thirdCol: [
      {
        content: 'Staking',
        border: 'borderBlue',
        style: {
          height: 75,
          paddingLeft: windowSize < 768 ? 20 : null,
          width: windowSize < 768 ? 52 : null,
          paddingTop: windowSize < 768 ? 37 : null,
        },
      },
      {
        content: 'DEX',
        border: 'borderBlue',
        style: {
          height: 145,
        },
      },
      {
        content: 'User Friendly Wallet',
        border: 'borderBlue',
        style: {
          height: windowSize < 768 ? 198 : 228,
        },
      },
      {
        content: 'Insurance',
        border: 'borderOrange',
        style: {
          height: windowSize < 768 ? 583 : 265,
        },
      },
    ],
    fourthCol: [
      {
        content: 'Governance',
        border: 'borderOrange',
        style: {
          height: 620,
          transform: 'translateY(504px)',
        },
      },
    ],
    fiveCol: [
      {
        content: 'STO',
        border: 'borderOrange',
        style: {
          height: windowSize < 768 ? 455 : 540,
          transform:
            windowSize < 768 ? 'translateY(544px)' : 'translateY(503px)',
        },
      },
    ],
  }

  return (
    <div className="relative" style={{ height: '85rem' }}>
      <div className=" flex items-center pl-32 sm:pl-64 mt-28 left-8 absolute top-0 right-0">
        <div
          className="flex flex-col  "
          // style={{ transform: windowSize < 768 ? 'translateY(-110px)' : null }}
        >
          {unions.map((item, i) => (
            <div className="flex">
              <Union
                value={item.value}
                color={item.color}
                year={item.year}
                isFirstYear={i === 0 ? true : false}
                customClass={
                  i === 0
                    ? 'rounded-md rounded-b-none'
                    : i > unions.length - 2
                    ? 'rounded-md rounded-t-none'
                    : null
                }
              />
            </div>
          ))}
        </div>
        <div className="flex justify-between flex-grow-2">
          <div style={{ transform: 'translateY(217px)' }}>
            {gridCols.firstCol.map((item) => (
              <TimeLineCard className="mb-4" isSquare>
                {item.content}
              </TimeLineCard>
            ))}
          </div>
          <div>
            {gridCols.secondCol.map((item) => (
              <TimeLineCard
                className="py-4  mb-3 px-6 w-14 sm:w-48 "
                isDefault
                border={item.border}
                style={item.style}
              >
                <div style={windowSize < 768 ? mobileTextStyle : null}>
                  {item.content}
                </div>
              </TimeLineCard>
            ))}
          </div>
          <div
            style={{
              transform:
                windowSize < 768 ? 'translateY(90px)' : 'translateY(20px)',
            }}
          >
            {gridCols.thirdCol.map((item) => (
              <TimeLineCard
                className="py-4 mb-3 px-6 w-14 sm:w-48"
                isDefault
                border={item.border}
                style={item.style}
              >
                <div style={windowSize < 768 ? mobileTextStyle : null}>
                  {item.content}
                </div>
              </TimeLineCard>
            ))}
          </div>

          <div className="hidden sm:block">
            {gridCols.fourthCol.map((item) => (
              <TimeLineCard
                className="py-4 mb-3 px-6 w-14 sm:w-48"
                isDefault
                border={item.border}
                style={item.style}
              >
                <div style={windowSize < 768 ? mobileTextStyle : null}>
                  {item.content}
                </div>
              </TimeLineCard>
            ))}
          </div>
          <div>
            {gridCols.fiveCol.map((item) => (
              <TimeLineCard
                className="py-4 mb-3 px-6 w-14 sm:w-48"
                isDefault
                border={item.border}
                style={item.style}
              >
                <div style={windowSize < 768 ? mobileTextStyle : null}>
                  {item.content}
                </div>
              </TimeLineCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimeLine
