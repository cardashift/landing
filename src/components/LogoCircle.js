import React from 'react'
import RoundSquare from './RoundSquare'

function LogoCircle() {
  const circle = {
      background: 'transparent',
      border: '1.39619px solid rgba(255, 255, 255, 0.4)',
      boxShadow:
        'inset -6.98093px -6.98093px 13.9619px #FAFBFF, inset 6.98093px 6.98093px 13.9619px #A6ABBD',
      borderRadius: '50%',
      position: 'absolute',
    },
    largeCircle = {
      ...circle,
      right: -670,
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
    <div className="flex items-center justify-center" style={largeCircle}>
      <RoundSquare
        style={largeCircle.square}
        icon={
          <img src="/images/stim.svg" style={{ transform: 'rotate(15deg)' }} />
        }
      />
      <span className="flex items-center justify-center" style={mediumCercle}>
        <RoundSquare
          style={mediumCercle.square}
          icon={
            <img
              src="/images/matters.svg"
              style={{ transform: 'rotate(-15deg)' }}
            />
          }
        />
        <span style={smallCircle}>
          <RoundSquare
            style={smallCircle.square}
            icon={<img src="/images/arrows-icon.svg" />}
          />
        </span>
      </span>
    </div>
  )
}

export default LogoCircle
