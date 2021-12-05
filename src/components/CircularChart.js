import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
// import 'react-circular-progressbar/dist/styles.css'
// import Logo from '../../components/Logo'
import LinearSVG from './LinearSVG'
function CircularChart({
  publicSale,
  privateSale,
  marketing,
  ambassadors,
  partnerships,
  team,
  treasury,
}) {
  const statistics = [
    {
      value: publicSale,
      title: 'Public Sale',
      class: 'public-sale',
      indicator: '/images/public-sale-arrow-icon.svg',
      percent: 15,
    },
    {
      value: privateSale,
      title: 'Private sale',
      class: 'private-sale',
      indicator: '/images/private-sale-arrow-icon.svg',
      percent: 20,
    },
    {
      value: marketing,
      title: 'Marketing',
      class: 'marketing',
      indicator: '/images/marketing-arrow-icon.svg',
      percent: 25,
    },
    {
      value: ambassadors,
      title: 'Ambassadors',
      class: 'ambassadors',
      indicator: '/images/ambassadors-arrow-icon.svg',
      percent: 30,
    },
    {
      value: partnerships,
      title: 'Partnerships',
      class: 'partnerships',
      indicator: '/images/partenerships-arrow-icon.svg',
      percent: 40,
    },
    {
      value: team,
      title: 'Team (36m lock)',
      class: 'team',
      indicator: '/images/tem-arrow-icon.svg',
      percent: 50,
    },
    {
      value: treasury,
      title: 'Treasury',
      class: 'treasury',
      indicator: '/images/treasury-arrow-icon.svg',
      percent: 100,
    },
  ]
  return (
    <div className="progress-circular-chart ">
      <div className="progress-circular-chart__content">
        <div className=" circle-md  ">
          <span className="circle-sm">
            <span className=" circle-xs"></span>
          </span>
        </div>
        {statistics.map((item) => (
          <>
            <div className={`flex ${item.class}-indicator`}>
              <span className="text-right">
                <label className=" font-Inter font-normal text-lg text-primaire">
                  {item.title}
                </label>
                <br />
                <label className="font-Inter font-bold text-lg text-primaire">
                  {item.value}%
                </label>
              </span>

              <img className="mt-5 ml-2 mr-2" src={item.indicator} />
            </div>
            <CircularProgressbar
              value={item.percent}
              strokeWidth={17}
              circleRatio={1}
              className={`progress-bar ${item.class}`}
            />
          </>
        ))}
        <LinearSVG />
      </div>
    </div>
  )
}

export default CircularChart
