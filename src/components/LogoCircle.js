import React from 'react'
import RoundSquare from './RoundSquare'

function LogoCircle() {
  const circle = {
      background: 'transparent',
      border: '1.39619px solid rgba(255, 255, 255, 0.4)',
      boxShadow:
        'inset -6.98093px -6.98093px 13.9619px #FAFBFF, inset 6.98093px 6.98093px 13.9619px #A6ABBD',
      borderRadius: '50%',
      position: 'relative',
    },
    largeCircle = {
      ...circle,
      right: '-680px',
      height: 1318,
      width: 1318,
      square: {
        transform: 'rotate(-28deg)',
        bottom: 254,
        left: 10,
      },
    }
  const mediumCercle = {
    ...circle,
    width: 830,
    height: 830,
    square: {
      transform: 'rotate(33deg)',
      top: 0,
      left: 100,
    },
  }
  const smallCircle = {
    ...circle,
    width: 410,
    height: 410,
    square: {
      top: 115,
      left: -60,
    },
  }

  return (
    <div className="absolute">
      <div className="flex items-center justify-center" style={largeCircle}>
        <RoundSquare style={largeCircle.square} icon="/images/stim.svg" />
        <span className="flex items-center justify-center" style={mediumCercle}>
          <RoundSquare style={mediumCercle.square} icon="/images/matters.svg" />
          <span style={smallCircle}>
            <RoundSquare
              style={smallCircle.square}
              icon="/images/arrows-icon.svg"
            />
          </span>
        </span>
      </div>
    </div>
  )
}

export default LogoCircle
