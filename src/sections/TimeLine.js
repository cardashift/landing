import React from 'react'
import TimeLineCard from '../components/TimeLineCard'
import Union from '../components/Union'

function TimeLine() {
  const unions = [
    {
      value: '12/2021',
      color:
        'linear-gradient(135.37deg, rgba(0, 0, 0, 0.4) 4.29%, rgba(255, 255, 255, 0.4) 95.6%), #0029FF',
    },
    {
      value: 'Q1 2022',
      color:
        'linear-gradient(135.37deg, rgba(0, 0, 0, 0.4) 4.29%, rgba(255, 255, 255, 0.4) 95.6%), #0029FF',
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
    },
    {
      value: 'Q1 2023',
      color: '#121E34',
    },
  ]
  const gridCols = {
    firstCol: [
      {
        content: 'Launchpad Beta for crypto enthusiasts',
        border: 'borderBlue',
        style: {
          height: 160,
        },
      },
      {
        content: 'Launchpad V2 for a wider audience',
        border: 'borderBlue',
        style: {
          height: 300,
        },
      },
      {
        content: 'Lending',
        border: 'borderOrange',
        style: {
          height: 265,
        },
      },
      {
        content: 'Decentralized blockhain based carbon market',
        border: 'borderOrange',
        style: {
          height: 323,
        },
      },
    ],

    secondCol: [
      {
        content: 'Staking',
        border: 'borderBlue',
        style: {
          height: 75,
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
        border: 'borderOrange',
        style: {
          height: 175,
        },
      },
      {
        content: 'Insurance',
        border: 'borderOrange',
        style: {
          height: 265,
        },
      },
    ],
    thirdCol: [
      {
        content: 'Governance',
        border: 'borderOrange',
        style: {
          height: 600,
        },
      },
    ],
    fourthCol: [
      {
        content: 'STO',
        border: 'borderOrange',
        style: {
          height: 485,
        },
      },
    ],
  }

  return (
    <div className="flex items-center pl-80 ">
      <div className="grid w-full grid-cols-5 gap-4">
        <div className="flex flex-col ">
          {unions.map((item, i) => (
            <div className="flex">
              <Union
                value={item.value}
                color={item.color}
                customClass={
                  i === 0
                    ? 'rounded-md rounded-b-none'
                    : i > unions.length - 2
                    ? 'rounded-md rounded-t-none'
                    : null
                }
              />
              <TimeLineCard isSquare>1st call for projects</TimeLineCard>
            </div>
          ))}
        </div>
        <div>
          {gridCols.firstCol.map((item) => (
            <TimeLineCard isDefault border={item.border} style={item.style}>
              {item.content}
            </TimeLineCard>
          ))}
        </div>
        <div>
          {gridCols.secondCol.map((item) => (
            <TimeLineCard isDefault border={item.border} style={item.style}>
              {item.content}
            </TimeLineCard>
          ))}
        </div>
        <div>
          {gridCols.thirdCol.map((item) => (
            <TimeLineCard isDefault border={item.border} style={item.style}>
              {item.content}
            </TimeLineCard>
          ))}
        </div>
        <div>
          {gridCols.fourthCol.map((item) => (
            <TimeLineCard isDefault border={item.border} style={item.style}>
              {item.content}
            </TimeLineCard>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TimeLine
